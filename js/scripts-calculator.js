input = [];
i = 0;
display = "";
type = [];

$(".screen").html("0");

$(".button").on('click', function() {
	var value = $(this).attr("id");
	input.push(value);
	i = i + 1;
	console.log(input);
	console.log(i);
	}
);

$(".operator").on('click', function() {
	var value = $(this).attr("id");
	if ( input[0] == "/" || input[0] == "*" || input[0] == "+" || input[0] == "-" || input[0] == "." ) {
		input[0] = "0";
		input[1] = value;
		i = i + 1;
	};
	if (( input[i-2] == "(" || input[i-2] == ")" ) && ( input[i-1] == "(" || input[i-1] == ")" || input[i-1] == "/" || input[i-1] == "*" || input[i-1] == "+" || input[i-1] == "-" || input[i-1] == "." )) {
		input.splice(i-2,1);
		i = i -1;
	};
	if ( input[i-2] == "/" || input[i-2] == "*" || input[i-2] == "+" || input[i-2] == "-" || input[i-2] == "." ) {
	input.splice(i-2,1);
	i = i -1;
	}
}
);

$("#C").on('click', function() {
	input.pop();
	input.pop();
	i = i - 1;
	}
);

$(".button").on('click', function() {
	display = "";
	console.log(input);
	console.log(i);
	for (var k = 0 ; k < input.length ; ++k) {
		display = display + input[k];
	};

	if (display === "") {
		$(".screen").html("0");
		}
	else {
		$(".screen").html(display);
		}
	}
);


$(".equal-button").on('click', function() {
	output = "";
	if (input[0] === "=") {
		output = 0
		}
	else { 
		for (var j = 0 ; j < input.length - 1 ; ++j) {
			output = output+input[j];
			}
		}
	console.log(eval(output));
	$(".screen").html(eval(output));
	input = [];
	type = [];
	display = "";
	i = 0;
	}
);

$("#CE").on('click', function() {
	input = [];
	type = [];
	display = "";
	i = 0;
	$(".screen").html("0");
	}
);

