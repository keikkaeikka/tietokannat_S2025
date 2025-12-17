<?php
require __DIR__ . '/../../db.php';

$stmt = $pdo->query("SELECT * FROM opiskelija");
echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
