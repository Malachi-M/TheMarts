<?php

    $dir = "images";
    if(is_dir($dir)){
        if($dd = opendir($dir)){
            while(($f = readdir($dd)) !== false)
                if(is_file($dir."/".$f))
                    $files[] = $f;
            closedir($dd);
}

    $n = $_GET["n"];
    $response = "";
        for($i = $n; $i<$n+9; $i++){
            $response = $response.$files[$i%count($files)].";";
        }
        echo $response;
}
?>
