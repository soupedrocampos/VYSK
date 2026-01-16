
$baseUrl = "https://framerusercontent.com/images"
$assetsDir = "public/assets"
$logosDir = "$assetsDir/logos"

New-Item -ItemType Directory -Force -Path $logosDir

$courseCards = @{
    "card-video-creator.png" = "X8uxNhXj1GNrWZm08Dq1GjJCmzs.png"
    "card-gpt-pro.png" = "40hFnikZLyr4wt1NX4MaIKARotQ.png"
    "card-image-creator.png" = "fkXRgtuw6d3qaMF31H1eeTrZEeI.png"
    "card-other.png" = "fN9vPxiiBYAe2Wsx1GynJdCG0.png"
}

$logos = @{
    "dpz.png" = "lCBoLmjTlSN6JM1ST04NrulKK0.png"
    "artplan.png" = "8sQlq3CiyE6e1nx4GEDFDqYtY.png"
    "hogarth.png" = "yNEXidNHl13EcP8HnUTlh33crbI.png"
    "africa.png" = "eMnZi7QCyZjtPSKEVqplvGqF7k.png"
    "dam.png" = "XWxL7yxhLxk1kL09tnAOcZ0Gw.png"
    "google.png" = "qfBTfPk69ZjjT32za2kQvqYQ.png"
    "trident.png" = "aWNVtzKk4QhrEvB1P0H8KOY5M.png"
    "willbank.png" = "2FIdpLTp9p2o7vxXCFlDd8B9dhE.png"
    "claro.png" = "59l7O5WOdRZHAnACJEQjL9Mb1zk.png"
    "almap.png" = "Eh63GeoQgmq0yVKoEfFo5Y2mA34.png"
    "nio.png" = "zACUtsXAUdqEpnEu9ReXTTbe7c.png"
    "betmgm.png" = "riCVnGheDRYpna1bQxmaSZS87J4.png"
    "dreamers.png" = "OCwBTHNxTxT9zPJVvV7rdygc.png"
    "mymama.png" = "9Pu7Qv0C1yON01YkPkmiFh5YvU.png"
    "hotmart.png" = "YzLJWTCxwNI4WDwgdkG7T4VGJ0E.png"
    "samsung.png" = "rCeIMWBl1MiMI7eoJpHKVWHS5k.png"
    "essential.png" = "3hWHLgu8Nw5fqVRtK0cTzraNhw8.png"
    "cogna.png" = "M8youEJ0y2aHQ1h9Ol7XcxNPXng.png"
    "3coracoes.png" = "YNckIGcfXjLcaZyF7W39vxVRxgE.png"
}

foreach ($name in $courseCards.Keys) {
    $url = "$baseUrl/$($courseCards[$name])"
    $output = "$assetsDir/$name"
    echo "Downloading $name..."
    Invoke-WebRequest -Uri $url -OutFile $output
}

foreach ($name in $logos.Keys) {
    $url = "$baseUrl/$($logos[$name])"
    $output = "$logosDir/$name"
    echo "Downloading $name..."
    Invoke-WebRequest -Uri $url -OutFile $output
}
