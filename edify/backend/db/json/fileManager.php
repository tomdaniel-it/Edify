<?php

// PRIVATE
function getFilePath($filename) {
  return join(DIRECTORY_SEPARATOR, array(__DIR__, 'db', $filename . '.php'));
}

// PRIVATE
// Required, otherwise anyone could read the file contents and read all database information
function addPhpContentPrefix($content) {
  return '<?php //' . $content;
}

// PRIVATE
function removePhpContentPrefix($content) {
  return substr($content, 8);
}

function readFileContent($filename) {
  $path = getFilePath($filename);
  if (!file_exists($path)) {
    return NULL;
  }
  $jsonLine = removePhpContentPrefix(trim(fgets(fopen($path, 'r'))));
  return json_decode($jsonLine);
}

function writeFileContent($filename, $obj) {
  $path = getFilePath($filename);

  $json = json_encode($obj);

  file_put_contents($path, addPhpContentPrefix($json));
}

?>