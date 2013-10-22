
function traduci(nome){
	//nome_scherzo = getCookie("nome_scherzo");
	nomi = [ 'Rombo di Tuono', 'Toro seduto', 'Nuvola rossa', 'Occhio di volpe', 'Gatto pazzo', 'Stella coperta', 'Buona strada',
			'Spirito', 'Arcobaleno', 'Condor del Sole', 'Aquila del Sole', 'Condor selvaggio', 'Spirito guerriero', 'Orso magro',
			'Antilope', 'Spirito del Cervo', 'Senza paura', 'Capo alto', "Tromba d'aria", 'Piccolo lupo' ];
	nome_scherzo = window.localStorage.getItem("nome");
	nome = nome.toLowerCase();
	if(!nome)
		return;
	if(nome == nome_scherzo)
		document.getElementById('nome2').innerHTML = 'Rutto di culo';
	else{
		value = 0;
		for( i=0; i < nome.length; i++)
			value += nome.charCodeAt(i);
		opz = (value%nomi.length)+1;
		nome2 = nomi[opz];
		document.getElementById('nome2').innerHTML = nome2;	
	}
}

function set(){
	$("#settings").remove();
	$("#play").remove();
	$("#div_settings").append("<h2>Inserisci nome:</h2>" +
							   "<input type=\"text\" name=\"nome_scherzo\" id=\"nome_scherzo\"/>" +
							  "<input type=\"button\" onclick=\"prendi_nome()\" value=\"ok\" />");	
}

function prendi_nome(){
	nome_scherzo = document.getElementById("nome_scherzo").value;
	top.location.href = "index2.html";
	//setCookie("nome_scherzo",nome_scherzo,10);
	window.localStorage.setItem("nome", nome_scherzo);
}

/*
function setCookie(c_name,value,exdays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name){
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1){
	  c_start = c_value.indexOf(c_name + "=");
	}
	if (c_start == -1){
	  c_value = null;
	}
	else{
		c_start = c_value.indexOf("=", c_start) + 1;
		var c_end = c_value.indexOf(";", c_start);
		if (c_end == -1){
			c_end = c_value.length;
		}
	c_value = unescape(c_value.substring(c_start,c_end));
	}
	return c_value;
}*/