<?php

require_once(dirname(__DIR__, 1) . DIRECTORY_SEPARATOR . 'common.php');
require_once(join(DIRECTORY_SEPARATOR, array(dirname(__DIR__, 1), 'auth', 'auth.php')));

setCors();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (!isAuthenticated()) showErrorAndExit(403, 'You are not authenticated. Try logging out and in again.');

  $data = getJsonData();

  $fieldRules = [
    createFieldRule('url', 'string', true, NULL, false),
  ];
  $data = checkRequiredFieldsAndTransform($data, $fieldRules);

  $url = $data['url'];

  $fileLocation = getFileLocationFromUrl($url);
  if (!file_exists($fileLocation)) showErrorAndExit(404, 'The corresponding file of this webpage can not be found or is not a .html file.');
  $file = file_get_contents($fileLocation);

  if ($file === FALSE) showErrorAndExit(404, 'The corresponding file of this webpage can not be found or is not a .html file.');

  $file = preg_replace('/\sdata-eid=\"[0-9]+\"/', '', $file);
  $num = 0;
  $file = preg_replace_callback('/(<[a-zA-Z][^\/\\s>]*)/', function($m) {
    global $num;
    return $m[1] . ' data-eid="' . $num++ . '"';
  }, $file);

  file_put_contents($fileLocation, $file);
}

?>