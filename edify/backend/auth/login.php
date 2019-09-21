<?php

session_start();

require_once(dirname(__DIR__, 1) . DIRECTORY_SEPARATOR . 'common.php');
require_once(dirname(__DIR__, 1) . DIRECTORY_SEPARATOR . 'config.php');
require_once(__DIR__ . DIRECTORY_SEPARATOR . 'auth.php');
require_once(join(DIRECTORY_SEPARATOR, array(dirname(__DIR__, 1), 'db', $DB_TYPE, 'user.php')));

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = getJsonData();

  $fieldRules = [
    createFieldRule('username', 'string', true, NULL, false),
    createFieldRule('password', 'string', true, NULL, false),
  ];
  $data = checkRequiredFieldsAndTransform($data, $fieldRules);

  $username = $data['username'];
  $password = $data['password'];

  $hashedPassword = hashPassword($password);

  $user = getUser();

  if ($user->username === $username && $user->hashedPassword === $hashedPassword) {
    authenticate();
  } else {
    showErrorAndExit(401, 'Username or password is incorrect.');
  }
}

?>