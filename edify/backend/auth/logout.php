<?php

require_once(dirname(__DIR__, 1) . DIRECTORY_SEPARATOR . 'config.php');
require_once(__DIR__ . DIRECTORY_SEPARATOR . 'auth.php');

unauthenticate();
header('Location: /');

?>