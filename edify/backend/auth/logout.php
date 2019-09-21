<?php

session_start();

require_once(__DIR__ . DIRECTORY_SEPARATOR . 'auth.php');

unauthenticate();
header('Location: /');

?>