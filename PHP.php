//////////////////////////
// Introduction to PHP //
////////////////////////

<h1>My First PHP Site</h1>
<p>This HTML will get delivered as is</p>
<?php echo "<p>But this code is interpreted by PHP and turned into HTML</p>";?> // "?php" precedes and ";?" ends every php statement
<?php echo "<ul><li>You can use any HTML tags,</li><li>like this list.</li></ul>";?> // echo is used to output text
<footer>
	<p>And this code is back in plain HTML</p>
</footer>

// PHP is not always case-sensitive, and does not care about whitespace

// Following is To Do List to exhibit how CRUD (Create, Read, Update, Delete) behaviors are implemented
<?php
require 'vendor/autoload.php';
# This logic handles connecting to the database, where we store our todo status
$pdo = new \PDO("sqlite:" . "db/sqlite.db");

# This PHP logic handles user actions
# New TODO
if (isset($_POST['submit'])) {
	$description = $_POST['description'];
	$sth = $pdo->prepare("INSERT INTO todos (description) VALUES (:description)");
	$sth->bindValue(':description', $description, PDO::PARAM_STR);
	$sth->execute();
}
# Delete TODO
elseif (isset($_POST['delete'])) { 
	$id = $_POST['id'];
	$sth = $pdo->prepare("delete from todos where id = :id");
	$sth->bindValue(':id', $id, PDO::PARAM_INT);
	$sth->execute();
}
# Update completion status
elseif (isset($_POST['complete'])) {
	$id = $_POST['id'];
	$sth = $pdo->prepare("UPDATE todos SET complete = 1 where id = :id");
	$sth->bindValue(':id', $id, PDO::PARAM_INT);
	$sth->execute();
}
# Here is the HTML:
?>
<!DOCTYPE HTML>
<html lang="en">
<head>
	<title>Todo List</title>
</head>

<body class="container">
	<h1>Todo List</h1>
	<form method="post" action="">
		<input type="text" name="description" value="">
		<input type="submit" name="submit" value="Add">
	</form>
	<h2>Current Todos</h2>
	<table class="table table-striped">
		<thead><th>Task</th><th></th><th></th></thead>
		<tbody>

<?php
	# Entering PHP mode, 
$sth = $pdo->prepare("SELECT * FROM todos ORDER BY id DESC");
$sth->execute();

foreach ($sth as $row) {
	# Exiting PHP Mode
?> 

<tr>
	<td>
		<!-- This is PHP shorthand for inserting dynamic text into HTML -->
		<?=htmlspecialchars($row['description'])?></td>
	<td>
		<?php # Here we are mixing HTML and PHP to get the desired document
if (!$row['complete']) {
			?>
		<form method="POST">
			<button type="submit" name="complete">Complete</button>
			<input type="hidden" name="id" value="<?=$row['id']?>">
			<input type="hidden" name="complete" value="true">
		</form>
		<?php
} else {
			?>
		Task Complete!
		<?php
}
		?>
	</td>
	<td>
		<form method="POST">
			<button type="submit" name="delete">Delete</button>
			<input type="hidden" name="id" value="<?=$row['id']?>">
			<input type="hidden" name="delete" value="true">
		</form>
	</td>
</tr>
<?php
}
?>
		</tbody>
	</table>
</body>
</html>

////////////////////////////////
// PHP Strings and Variables //
//////////////////////////////
<?php
	echo "1. Teach PHP";
	echo "\n2. [Another thing to do]"; // Notice \n to print on new line
	echo "\n3. Learn how to have \"fun\""; // Notice \ escape sequence for "
	echo "\n4. String" . " " . "Concatenation"; // Example concatenation
	/* Output:
	1. Teach PHP
	2. [Another thing to do]
	3. Learn how to have "fun"
	4. String Concatenation
	*/
?>

<?php
	// PHP uses "snake_case" convention for variables
	$dog_name = "Tadpole";
	$favorite_food = "treat";
	$color = "brown";
	// Notice the combination of curlies and non-curly variable
	echo "I have a ${color}ish dog named $dog_name and her favorite food is ${favorite_food}s.";
	// Prints: I have a brownish dog named Tadpole and her favorite food is treats.
?>

<?php
	// You can use ".=" to append to the end of a variable as well
	$sentence = "I'm going on a picnic, and I'm taking apples";
	echo $sentence; // Prints "I'm going on a picnic, and I'm taking apples"
	$sentence .= " and bananas";
	echo $sentence; // Prints "I'm going on a picnic, and I'm taking apples and bananas"
?>

<?php
	// Reference assignment operator "=&" points the new variable towards the same place in memory as the old
	$first_player_rank = "Beginner";
	$second_player_rank =& $first_player_rank; 
	echo $second_player_rank; // Prints: Beginner

	$first_player_rank = "Intermediate"; // Reassign the value of $first_player_rank
	echo $second_player_rank; // Prints: Intermediate
?>

//////////////////
// PHP Numbers //
////////////////
// Can use +=, -=, *=, /=, and %= like you would expect