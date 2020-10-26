function check() {
    let info;
    let listeLand = document.getElementById('bundeslandInfo').value 

    switch (listeLand) {
        case 'Baden-Württemberg':
        info = 'hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt'           
            break;
        case 'Bayern':
        info = 'hat 12,844 Mio Einwohner und München ist die Hauptstadt'
        break
        case 'Berlin':
        info = 'hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt'
        break
        case 'Brandenburg':
        info = 'hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt'
        break
        case 'Bremen':
        info = 'hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt'
        break
        case 'Hamburg':
        info = 'hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt'
        break
        case 'Hessen':
        info = 'hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt'
        break
        case 'Mecklenburg-Vorpommern' :
        info = 'hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt'
        break
        case 'Niedersachsen' :
        info = 'hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt'
        break
        case 'Nordrhein-Westfalen':
        case 'nrw':
        info = 'hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt'
        break
        case 'Rheinland-Pfalz':
        info = 'hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt'
        break
        case 'Saarland':
        info = 'hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt'
        break
        case 'Sachsen':
        info = 'hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt'
        break
        case 'Sachsen-Anhalt':
        info = 'hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt'
        break
        case 'Schleswig-Holstein':
        info = 'hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt'
        break
        case 'Thüringen':
        info = 'hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt'
        break


    
        default:
        info ='Ein solches Bundesland gibt es in Deutschland nicht.'
        
    }
    document.getElementById('bundeslandInfoErgebnis').innerHTML = info
}
