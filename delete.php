<?php

    require 'home.php';

    $id = $_GET["id"];

    if(delete($id)>0)
    {
        echo "<script>
                alert('kolom telah dihapus');
                document.location.href = 'home.php';
            </script>";
    }

    else
    {
        echo "<script>
                alert('kolom telah dihapus');
                document.location.href = 'home.php';
            </script>";
    }
?>