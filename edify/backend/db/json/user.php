<?php

require_once(__DIR__ . DIRECTORY_SEPARATOR . 'fileManager.php');

function addUser($username, $hashedPassword) {
  $user = (object) [
    'username' => $username,
    'hashedPassword' => $hashedPassword,
  ];

  // Only one user should exist (for now)
  writeFileContent('user', [$user]);
}

function getUser() {
  $users = readFileContent('user');

  // Only one user should exist (for now)
  return $users[0];
}

?>