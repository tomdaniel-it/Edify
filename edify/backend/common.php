<?php

require_once(__DIR__ . DIRECTORY_SEPARATOR . 'config.php');

function isValidJSON($str) {
    json_decode($str);
    return json_last_error() == JSON_ERROR_NONE;
}

function setContentTypeJson() {
    header('Content-Type: application/json');
}

function setCors() {
  global $ENV;

  if ($ENV === 'development') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, HEAD, OPTIONS');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  }
}

function getJsonData() {
    $json = file_get_contents('php://input');
    if (!isValidJSON($json)) return NULL;
    return json_decode($json, true);
}

function setJsonOutputData($data) {
    setContentTypeJson();
    $jsonResult = json_encode($data);
    echo($jsonResult);
}

// Types: string, int, float, boolean
function createFieldRule($fieldName, $fieldType, $required, $defaultValue = NULL, $allowEmptyContent = false) {
    return (object)[
        'name' => $fieldName,
        'type' => $fieldType,
        'required' => $required,
        'defaultValue' => $defaultValue,
        'allowEmptyContent' => $allowEmptyContent,
    ];
}

function checkRequiredFieldsAndTransform($data, $fieldRules) {
    foreach ($fieldRules as $fieldRule) {
        $name = $fieldRule->name;

        if ($fieldRule->required && !isset($data[$name])) showErrorAndExit(400, $name . ' is required.');
        $isOptionalAndUnset = !$fieldRule->required && !isset($data[$name]);

        if (!$isOptionalAndUnset) {
            if ($fieldRule->type === 'string' && !is_string($data[$name]))
                showErrorAndExit(400, $name . ' needs to be of type string.');
            if ($fieldRule->type === 'string' && !$fieldRule->allowEmptyContent && strlen(trim($data[$name])) === 0)
                showErrorAndExit(400, $name . ' is not allowed to be empty');

            if ($fieldRule->type === 'int' && !is_int($data[$name]))
                showErrorAndExit(400, $name . ' needs to be of type int.');

            if ($fieldRule->type === 'float' && !is_float($data[$name]) && !is_int($data[$name]))
                showErrorAndExit(400, $name . ' needs to be of type float.');

            if ($fieldRule->type === 'boolean' && !is_bool($data[$name]))
                showErrorAndExit(400, $name . ' needs to be of type boolean.');
        } else {
            $data[$name] = $fieldRule->defaultValue;
        }

    }
    return $data;
}

function showErrorAndExit($code, $error = "") {
    http_response_code($code);
    if (isset($error) && is_string($error) && strlen(trim($error)) > 0) {
        $response = (object)['error' => $error];
        setJsonOutputData($response);
    }
    exit();
}

function joinPath(...$pathElements) {
  $elements = [];
  foreach ($pathElements as $index => $pathElement) {
    if (strlen(trim($pathElement)) === 0 || (trim($pathElement)[0] === '/' && strlen(trim($pathElement)) === 1)) continue;
    if ($pathElement[0] === '/' && $index > 0) $pathElement = substr($pathElement, 1);
    if ($pathElement[strlen($pathElement) -1] === '/') $pathElement = substr($pathElement, 0, -1);
    array_push($elements, $pathElement);
  }
  return join(DIRECTORY_SEPARATOR, $elements);
}

function getFileLocationFromUrl($url) {
  // (http)(://)(www.thisisatest.co.uk(:80))(/subdir/subdir/(subdir/))(test.html?var=x#anchor)
  // Subdir: Group 5 (/subdir/subdir/subdir/)
  // Filename: Group 7 (test.html?var=x#anchor)
  if (preg_match('/^((https|http):\/\/)?[\w\-\.]+(:[0-9]+)?((\/([\w\-]+\/)+|\/)(.*))?$/', $url, $matches)) {
    $subdir = $matches[5];
    $filenameWithExtras = $matches[7];
    if (trim($filenameWithExtras) === '') {
      // url = 'something.com/subdir/'
      $filename = joinPath(dirname(__DIR__, 2), $subdir, 'index.html');
      return $filename;
    } 

    if (preg_match('/^([\w\-\.]+\.[\w\-]+)((\?|#)?.*)$/', $filenameWithExtras, $filenameMatches)) {
      // Normal filename in url
      $filename = joinPath(dirname(__DIR__, 2), $subdir, $filenameMatches[1]);
      return $filename;
    } else {
      // filenameWithExtras ends with directory, ex: test (coming from 'something.com/subdir')
      if (preg_match('/^([^\/\?#]+).*$/', $filenameWithExtras, $filenameMatches)) {
        $filename = joinPath(dirname(__DIR__, 2), $subdir, $filenameMatches[1], 'index.html');
        return $filename;
      }
      return NULL;
    }
  }
  return NULL;
}

?>
