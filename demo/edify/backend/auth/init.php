<?php

// USED FOR CREATING A NEW ACCOUNT IN THE INSTALLATION / INITIALIZATION PROCESS OF EDIFY

require_once(dirname(__DIR__, 1) . DIRECTORY_SEPARATOR . 'common.php');
require_once(dirname(__DIR__, 1) . DIRECTORY_SEPARATOR . 'config.php');
require_once(__DIR__ . DIRECTORY_SEPARATOR . 'auth.php');
require_once(join(DIRECTORY_SEPARATOR, array(dirname(__DIR__, 1), 'db', $DB_TYPE, 'user.php')));

setCors();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if(getUser() !== NULL) {
    showErrorAndExit(400, 'This application has already been installed.');
  }

  $data = getJsonData();

  $fieldRules = [
    createFieldRule('username', 'string', true, NULL, false),
    createFieldRule('password', 'string', true, NULL, false),
  ];
  $data = checkRequiredFieldsAndTransform($data, $fieldRules);

  $username = $data['username'];
  $password = $data['password'];

  if (strlen(trim($username)) < 3) {
    showErrorAndExit(400, 'Username must be at least 3 characters.');
  }

  if (strlen(trim($password)) < 5) {
    showErrorAndExit(400, 'Provide a more secure password.');
  }

  $hashedPassword = hashPassword($password);

  addUser($username, $hashedPassword);
}

?>
