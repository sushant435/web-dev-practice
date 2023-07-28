<?php
//Task
//1. Make a list of jokes
    $jokes = [
    "What falls, but never needs a bandage? The rain.",
    "I was going to tell you a joke about boxing but I forgot the punch line.",
    "I'm not a fan of spring cleaning. Let's be honest, I'm not into summer, fall, or winter cleaning either.",
    "Why did the egg hide? It was a little chicken.",
    "What did the dirt say to the rain? If you keep this up, my name will be mud!",
    "Why couldn't the sunflower ride its bike? It lost its petals.",
    "What's an egg's favorite vacation spot? New Yolk City.",
    "I ate a sock yesterday. It was very time-consuming.",
    "What kind of candy do astronauts like? Mars bars.",
    "I wanted to buy some camo pants but couldn't find any."
    ];

// 2. randomly select one jokes from the list
    $index = array_rand($jokes);
    $jokes = $jokes[$index];

// 3. convert the jokes into json format
    $response=[
        "status"=>200,
        "joke"=>$joke,
        "id"=>$index

    ];
    $jsonResponse=json_encode($response);

// 4. return the output json
    header("Access-Control-Allow-Origin : http://localhost/jokes-backend");

    echo $jsonResponse;
