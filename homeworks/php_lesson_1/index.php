<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Blog</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/main.css" rel="stylesheet">

  </head>

  <body>
  <!-- Navigation -->
    <?php
        include ('blocks/header.php');
    ?>
    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <!-- Content -->
          <?php
            include ('blocks/content.php');
          ?>
        <!-- Sidebar -->
          <?php
            include ('blocks/sidebar.php');
          ?>
        <div class="clearfix"></div>
      </div>
      <!-- Pagination -->
        <?php
            include ('blocks/pagination.php');
        ?>
    </div>
    <!-- /.container -->
    <!-- Footer -->
         <?php
           include ('blocks/footer.php');
         ?>
    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  </body>

</html>
