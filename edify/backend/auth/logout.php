<?php

session_start();

require_once(__DIR__ . DIRECTORY_SEPARATOR . 'auth.php');
require_once(dirname(__DIR__, 1) . DIRECTORY_SEPARATOR . 'common.php');

setCors();

unauthenticate();
header('Location: /');

?>
