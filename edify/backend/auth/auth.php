<?php

function hashPassword($password) {
  return password_hash($password, PASSWORD_BCRYPT, ['cost' => 12]);
}

function verifyPassword($password, $hashedPassword) {
  return password_verify($password, $hashedPassword);
}

function authenticate() {
  $_SESSION['authenticated'] = TRUE;
}

function unauthenticate() {
  session_destroy();
}

function isAuthenticated() {
  trigger_error($_SESSION['authenticated'], E_USER_WARNING);
  return isset($_SESSION['authenticated']) && $_SESSION['authenticated'] === TRUE;
}

?>
