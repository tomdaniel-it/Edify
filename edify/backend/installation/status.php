<?php

require_once(dirname(__DIR__, 1) . DIRECTORY_SEPARATOR . 'config.php');
require_once(dirname(__DIR__, 1) . DIRECTORY_SEPARATOR . 'common.php');
require_once(joinPath(dirname(__DIR__, 1), 'db', $DB_TYPE, 'user.php'));

setCors();
setJsonOutputData((object) ['installed' => getUser() !== NULL]);

?>
