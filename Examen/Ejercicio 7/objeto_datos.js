var datos = function() {
this.Victorias = 0
this.Derrotas = 0
this.Empates = 0


this.getVictorias = function() {
    return this.Victorias
}
this.getDerrotas = function() {
    return this.Derrotas
}

this.getEmpates = function() {
    return this.Empates
}

this.setVictorias = function(Victorias) {
    this.Victorias += Victorias
}

this.setDerrotas = function(Derrotas) {
    this.Derrotas += Derrotas
}

this.setEmpates = function(Empates) {
    this.Empates += Empates
}
}
