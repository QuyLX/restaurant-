$(function(){
	//khai bao khoi su dung isotope
	//
	khoimonan = $('.nhieumon').isotope({
	  itemSelector: '.motmon',
	  layoutMode: 'masonry'
	});
	// load anh xong ms chay hieu ung
	khoimonan.imagesLoaded().progress( function() {

	khoimonan.isotope('layout');
	
	});
	//click vao link lay du lieu
	//sau do load
	$('.tieudect a').click(function(){
		dulieu = $(this).data('monan');
		console.log(dulieu);
		khoimonan.isotope({ filter: dulieu })

		return false;
	});
})