<html>
    <style type="text/css">
         .red
         {
            background-color: red;
         }
         
    </style>
<head>
</head>
<body>
    <h1>KONVERSI BARANG PAK JOY</h1>
        
        <?php 
        $nama = array("Tepung", "gula", "pisang", "terigu", "mantan");
        $berat = array(1, 5, 2, 7, 1);
        $stock = array(20, 25, 20, 30, 0);
        ?>
        
        <table border="1">
            <tr>
                <th>No</th>
                <th>Nama Barang</th>
                <th>Berat(Kg)</th>
                <th>Berat(gram)</th>
                <th>Berat(miligram)</th>
                <th>stock</th>
            </tr>
            <?php
            for($i = 0; $i < sizeof($nama); $i++)
            {
                if($stock[$i]==0)
                {
                    echo '<tr class="red">';
                }
                elseif($stock[$i]!=0)
                {
                    echo '<tr>';
                }
            ?>
                
                    <td><?php echo $i+1 ?></td>
                    <td><?php echo $nama[$i] ?></td>
                    <td><?php echo $berat[$i] ?></td>
                    <td><?php echo $berat[$i]*1000 ?></td>
                    <td><?php echo $berat[$i]*1000000 ?></td>
                    <td><?php echo $stock[$i] ?></td> 
            </tr>
            <?php
            }
            ?> 
        </table>
</body>
</html>