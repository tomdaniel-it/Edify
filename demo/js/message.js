window.addEventListener('load', () => {
     document.getElementById("submitMessage").addEventListener("click", () => {
         let name = document.getElementById("contactName").value;
         let email = document.getElementById("contactEmail").value;
         let subject = document.getElementById("contactSubject").value;
         let message = document.getElementById("contactMessage").value;
         let messageObj = { name, email, subject, message };
         let request = new ApiRequest("POST", "php/sendMessage.php", () => {
            showSuccessMessage();
         });
         request.setFailureCallback(() => {
             showErrorMessage(JSON.parse(request.getResult()).error);
         });
         request.setJson(messageObj);
         request.send();
     });

     function showSuccessMessage() {
        let message = `
            <div class="alert alert-warning alert-dismissible">
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                <strong><lang-en>Confirm email</lang-en><lang-nl>Bevestig email</lang-nl></strong> 
                <lang-en>
                    An email is sent to your email address. When you confirm your email address, your message will be sent. (Check your spambox!)
                </lang-en>
                <lang-nl>
                    Een email is verstuurd naar uw email adres. Vanaf dat u uw email adres bevestigd, wordt het bericht pas verzonden. (Kijk zeker ook in uw spambox!)
                </lang-nl>
            </div>
        `;
        document.getElementById("alert-container").insertAdjacentHTML("afterbegin", message);
     }

     function showErrorMessage(err) {
        let message = `
            <div class="alert alert-danger alert-dismissible">
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                <strong>Error!</strong> <span class="errorMessage">` + err + `</span>
            </div>
        `;
        document.getElementById("alert-container").insertAdjacentHTML("afterbegin", message);
     }
 });

 class ApiRequest {
    constructor(method, url, success_callback /* optional */, failure_callback /* optional */){
        this.method = method;
        this.url = url;
        this.request = new XMLHttpRequest();
        this.content_type = null;

        this.success_callback = success_callback === null || success_callback === undefined ? ()=>{} : success_callback;
        this.failure_callback = failure_callback === null || failure_callback === undefined ? ()=>{} : failure_callback;
    }

    send(){
        this.request.onreadystatechange = (()=>{
            if (this.request.readyState !== 4) {
                return;
            }else if(this.request.status < 200 || this.request.status >= 300){
                console.log("%cError: %cThe following request failed with status code: " + this.request.status, "color:red;font-weight:bold;", "color:blue;");
                console.log("%cUrl: %c" + this.url + "  %cMethod: %c" + this.method + "  %cParameters: %c" + this.params, "color:red;font-weight:bold;", "color:blue;", "color:red;font-weight:bold;", "color:blue;", "color:red;font-weight:bold;", "color:blue;");
                console.log("%cResponse of server: %c" + this.request.responseText, "color:red;font-weight:bold;", "color:blue;");
                this.failure_callback();
                return;
            }
            this.success_callback();
        }).bind(this);
        this.request.open(this.method, this.url, true);
        if (this.content_type !== null) this.request.setRequestHeader("Content-type", this.content_type);
        this.request.send(this.params);
    }

    getResult(){
        return this.request.responseText;
    }

    setParams(){
        this.content_type = "application/x-www-form-urlencoded";
        let params = [];
        for(let i=0;i<arguments.length;i++){
            if(!(arguments[i] instanceof Param)){throw new Error("The method setParams() requires 0..* Param objects. An invalid object was passed through this method.");}
            params.push(arguments[i]);
        }
        this.params = combineParams(params);
    }

    setJson(obj) {
        this.content_type = "application/json";
        this.params = JSON.stringify(obj);
    }

    setSuccessCallback(callback){
        this.success_callback = callback === null || callback === undefined ? ()=>{} : callback;
    }

    setFailureCallback(callback){
        this.failure_callback = callback === null || callback === undefined ? ()=>{} : callback;
    }
}

class Param { 
    constructor(key, value){
        this.key = encodeURI(key);
        this.value = encodeURI(value);
    }

    getParam(){
        return this.key + "=" + this.value;
    }
}

function combineParams(params){ //params = []
    if(params.length === 1) return params[0].getParam();
    let str = "";
    for(let i=0;i<params.length;i++){
        if(i === params.length-1){
            str += params[i].getParam();
        }else{
            str += params[i].getParam() + "&";
        }
    }
    return str;
}