function carregarTabela(local) {
    document.getElementById("gfg").value = "";
    document.getElementById("local").innerHTML = local;
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        let text = "<table>\n";
            text += "<thead>\n";
            text += "<tr>\n";
            text += "<th>Data</th>\n";
            text += "<th>Dia</th>\n";
            text += "<th>HorÃ¡rio</th>\n";
            text += "<th>Evento</th>\n";
            text += "</tr>\n";
            text += "</thead>\n";
            text += "<tbody id=\"geeks\">\n";
        let data = "";
        let diaSemana = "";
        for (let i = 0; i < myObj.eventos.length; i++) {
            x = myObj.eventos[i];
            if (x.local == local) {
                text += "<tr>\n";
                if (x.data == data)
                    text += "<td style='opacity:0'>" + x.data + "</td>\n";
                else
                    text += "<td>" + x.data + "</td>\n";
                if (x.diaSemana == diaSemana)
                    text += "<td style='opacity:0'>" + x.diaSemana + "</td>\n";
                else
                    text += "<td>" + x.diaSemana + "</td>\n";
                text += "<td>" + x.horario + "</td>\n";
                text += "<td>" + x.titulo + "</td>\n";
                text += "</tr>\n";
                data = x.data;
                diaSemana = x.diaSemana;
            }
        }
        text += "</tbody>\n";
        text += "</table>\n";
        document.getElementById("lista-eventos").innerHTML = text;
    }
    xmlhttp.open("GET", "eventos.json");
    xmlhttp.send();
    return 0;
}