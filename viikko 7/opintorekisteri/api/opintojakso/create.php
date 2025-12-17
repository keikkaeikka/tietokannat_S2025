<?php
header("Content-Type: application/json; charset=UTF-8");

require __DIR__ . '/../../db.php';

// Luetaan JSON-body
$data = json_decode(file_get_contents("php://input"), true);

// Tarkistetaan, että tarvittavat kentät ovat olemassa
if (!isset($data["Koodi"], $data["Laajuus"], $data["Nimi"])) {
    http_response_code(400);
    echo json_encode(["error" => "Puuttuva kenttä"]);
    exit;
}

// Valmistellaan SQL
$stmt = $pdo->prepare(
    "INSERT INTO opintojakso (Koodi, Laajuus, Nimi)
     VALUES (:Koodi, :Laajuus, :Nimi)"
);

// Suoritetaan
$stmt->execute([
    ":Koodi" => $data["Koodi"],
    ":Laajuus" => $data["Laajuus"],
    ":Nimi" => $data["Nimi"]
]);

// Palautetaan luodun rivin id
echo json_encode([
    "idOpintojakso" => $pdo->lastInsertId()
]);
