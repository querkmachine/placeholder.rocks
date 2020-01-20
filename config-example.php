<?php 

// Rename file to config.php when in use

$domain = $_SERVER["HTTP_HOST"];
switch($domain) {
    case "placeholder.rocks":
        class Config {
            const DEBUG = true;
            const DIR_SOURCE = "/source/";
            const DIR_GENERATED = "/generated/";
        }
        break;
    default: 
        die("ERROR: Settings for environment '" . $domain . "' could not be found.");
        break;
}

date_default_timezone_set("UTC");
if(Config::DEBUG) {
    error_reporting(E_ALL);
}
else {
    error_reporting(0);
}