productos = {
		"llaveros": [
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0002.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0003.jpg"
			}
		],
		"maquetas" : [
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0009.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0010.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0011.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0012.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0013.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0014.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0015.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0016.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0017.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0018.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0019.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0020.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0021.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0022.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0023.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0027.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0028.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0029.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0030.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0031.jpg"
			},
		],
		"cuadros" : [
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0034.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0035.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0036.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0037.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0038.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0039.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0040.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0041.jpg"
			},
		],
		"posavasos" : [
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0032.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0033.jpg"
			},
		],
		"perfiles" : [
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0001.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0005.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0006.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0007.jpg"
			},
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0008.jpg"
			},
		],
		"imanes" : [
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0004.jpg"
			},
		],
		"otros" : [
			{
				"descripcion": "",
				"img": "img/gallery/eltallerexcentrico-20220919-0024.jpg"
			},
		]
};


function showGalleryProducts() {
    $.each(productos, function(element, values) {
        section = '<h3 class="tm-text-primary tm-gallery-header">'+element.charAt(0).toUpperCase() + element.slice(1)+'</h3> <div id="'+element+'" class="tm-gallery tm-mb-80"></div>';
        $('#products-gallery').append(section);
        $.each(values, function() {
            figure = '<figure class="effect-goliath tm-gallery-item"><img src="'+this.img+'" alt="Image"/><figcaption><p><i class="fas fa-search-plus"></i></p><a href="'+this.img+'">Ver todos</a></figcaption></figure>';
            $('#'+element).append(figure);
        });
    });
}