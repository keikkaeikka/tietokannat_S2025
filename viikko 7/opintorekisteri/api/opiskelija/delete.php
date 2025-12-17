<?php
require __DIR__ . '/../../db.php';

$data = json_decode(file_get_contents("php://input"), true);

$stmt = $pdo->prepare("DELETE FROM opiskelija WHERE id = :id");
$stmt->execute(["id" => $data["id"]]);

echo json_encode(["message" => "Opiskelija poistettu"]);
