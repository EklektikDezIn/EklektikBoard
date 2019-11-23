<?php
    # replace with your target MAC address
    $mac = 'b4:2e:99:35:f0:34'; 

    exec("wakeonlan $mac");
?>
