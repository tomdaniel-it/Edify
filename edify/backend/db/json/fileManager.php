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

// PRIVATE
function checkDbDirectory() {
  if (!is_dir(join(DIRECTORY_SEPARATOR, array(__DIR__, 'db')))) {
    mkdir(join(DIRECTORY_SEPARATOR, array(__DIR__, 'db')), 0777, FALSE);
  }
}

// Always returns an array
function readFileContent($filename) {
  $path = getFilePath($filename);
  if (!file_exists($path)) {
    return [];
  }
  $jsonLine = removePhpContentPrefix(trim(fgets(fopen($path, 'r'))));
  return json_decode($jsonLine);
}

function writeFileContent($filename, $arr) {
  if (!is_array($arr)) {
    throw new Exception('writeFileContent only allows arrays to be written to files.');
  }

  checkDbDirectory();

  $path = getFilePath($filename);

  $json = json_encode($arr);

  file_put_contents($path, addPhpContentPrefix($json));
}

?>
