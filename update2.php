<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KARYAWAN</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>
<body>
<div class="p-3 mb-2 bg-dark text-white ">
        <h1 class="text-center">Ubah Data</h1>
            <div class="position-relative">
            <form action="" method="post">
                <div class="d-block p-2 mb-3 mx-auto">
                    <label for="name">Nama : </label><br>
                    <input type="text" name="name" id="name" class="form-control">
                </div>
                <div class="d-block p-2 mb-3">
                    <label for="email">Email : </label><br>
                    <input type="email" name="email" id="email" class="form-control">
                </div>
                <div class="d-block p-2 mb-3">
                    <label for="address">Address : </label><br>
                    <input type="text" name="address" id="address" class="form-control">
                </div>
                <div class="d-block p-2">
                    <label for="gender">Gender : </label><br>
                    <select name="gender" id="gender" class="form-select">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div class="d-block p-2 mb-3">
                    <label for="position">Position : </label><br>
                    <input type="text" name="position" id="position" class="form-control">
                </div>
                <div class="d-block p-2">
                    <label for="status">Status : </label><br>
                    <select name="status" id="status" class="form-select">
                        <option value="Fulltime">Fulltime</option>
                        <option value="Part-time">Part-time</option>
                    </select>
                </div>
                
                <div class="d-grid gap-2">
                    <input type="submit" name="submit-karyawan" value="Submit" class="d-block p-2 btn btn-primary btn-lg">
                </div>
            </form>       
        </div>
    </div>

    <?php
        $connection = mysqli_connect("localhost:3305", "bryan", "12345", "praktikum11");
        $id = $_GET['id'];
        $name = !empty($_REQUEST['name']) ? $_REQUEST['name'] : '';
        $email = !empty($_REQUEST['email']) ? $_REQUEST['email'] : '';
        $address = !empty($_REQUEST['address']) ? $_REQUEST['address'] : '';
        $gender = !empty($_REQUEST['gender']) ? $_REQUEST['gender'] : '';
        $position = !empty($_REQUEST['position']) ? $_REQUEST['position'] : '';
        $status = !empty($_REQUEST['status']) ? $_REQUEST['status'] : '';

        if(isset($_POST["submit-karyawan"]))
        {
            $sqlUpdate = "UPDATE karyawan SET name='$name', email='$email', address='$address', gender='$gender', position='$position', status='$status' WHERE id=$id";

            if(mysqli_query($connection, $sqlUpdate)){
                echo "<script>
                alert('kolom telah diperbarui');
                document.location.href = 'home.php';
                </script>";
            }
            else {
                echo "ERROR: Could not able to execute $sqlUpdate. " . mysqli_error($connection);
            }
        }
            
    ?>
</body>
</html>
