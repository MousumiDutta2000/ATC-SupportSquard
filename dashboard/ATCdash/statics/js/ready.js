Circles.create({
	id: 'task-complete',
	radius: 75,
	value: 80,
	maxValue: 100,
	width: 8,
	text: function (value) { return value + '%'; },
	colors: ['#eee', '#1D62F0'],
	duration: 400,
	wrpClass: 'circles-wrp',
	textClass: 'circles-text',
	styleWrapper: true,
	styleText: true
})

// Draggable resixable close

window.onload = function () {
	initDragElement();
	initResizeElement();
};

function initDragElement() {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	var popups = document.getElementsByClassName("popup");
	var elmnt = null;
	var currentZIndex = 100; //TODO reset z index when a threshold is passed

	for (var i = 0; i < popups.length; i++) {
		var popup = popups[i];
		var header = getHeader(popup);

		popup.onmousedown = function () {
			this.style.zIndex = "" + ++currentZIndex;
		};

		if (header) {
			header.parentPopup = popup;
			header.onmousedown = dragMouseDown;
		}
	}

	function dragMouseDown(e) {
		elmnt = this.parentPopup;
		elmnt.style.zIndex = "" + ++currentZIndex;

		e = e || window.event;
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		if (!elmnt) {
			return;
		}

		e = e || window.event;
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = elmnt.offsetTop - pos2 + "px";
		elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onmouseup = null;
		document.onmousemove = null;
	}

	function getHeader(element) {
		var headerItems = element.getElementsByClassName("popup-header");

		if (headerItems.length === 1) {
			return headerItems[0];
		}

		return null;
	}
}

function initResizeElement() {
	var popups = document.getElementsByClassName("popup");
	var element = null;
	var startX, startY, startWidth, startHeight;

	for (var i = 0; i < popups.length; i++) {
		var p = popups[i];

		var right = document.createElement("div");
		right.className = "resizer-right";
		p.appendChild(right);
		right.addEventListener("mousedown", initDrag, false);
		right.parentPopup = p;

		var bottom = document.createElement("div");
		bottom.className = "resizer-bottom";
		p.appendChild(bottom);
		bottom.addEventListener("mousedown", initDrag, false);
		bottom.parentPopup = p;

		var both = document.createElement("div");
		both.className = "resizer-both";
		p.appendChild(both);
		both.addEventListener("mousedown", initDrag, false);
		both.parentPopup = p;
	}

	function initDrag(e) {
		element = this.parentPopup;

		startX = e.clientX;
		startY = e.clientY;
		startWidth = parseInt(
			document.defaultView.getComputedStyle(element).width,
			10
		);
		startHeight = parseInt(
			document.defaultView.getComputedStyle(element).height,
			10
		);
		document.documentElement.addEventListener("mousemove", doDrag, false);
		document.documentElement.addEventListener("mouseup", stopDrag, false);
	}

	function doDrag(e) {
		element.style.width = startWidth + e.clientX - startX + "px";
		element.style.height = startHeight + e.clientY - startY + "px";
	}

	function stopDrag() {
		document.documentElement.removeEventListener("mousemove", doDrag, false);
		document.documentElement.removeEventListener("mouseup", stopDrag, false);
	}
}

// <================== Show & Hide ======================>

// <================== Popup & icon Show and Hide ===================>

// <================== Popup & icon Show and Hide (Payment and registration) ===================>

function myFunction1() {
	var modal = document.getElementById("myModal1");
	modal.style.display = "none";
	var backdrop = document.getElementsByClassName("modal-backdrop");
	if (backdrop[0]) {
		backdrop[0].parentNode.removeChild(backdrop[0]);
	}

	var x = document.getElementById("myDIV1");
	x.style.display = '';

	var y = document.getElementById("icSHOW1");
	y.style.display = '';

	var z = document.getElementById("bgshhi1")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}

	var w = document.getElementById("cbg1")
	w.id = "bgshhi1"
}

function my_Function1() {

	var modal = document.getElementById("myModal1");
	modal.style.display = "none";
	var backdrop = document.getElementsByClassName("modal-backdrop");
	if (backdrop[0]) {
		backdrop[0].parentNode.removeChild(backdrop[0]);
	}

	var x = document.getElementById("myDIV11");
	x.style.display = '';

	var y = document.getElementById("ic_SHOW1");
	y.style.display = '';

	var z = document.getElementById("bg_shhi1")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}

	var w = document.getElementById("cbg_1")
	w.id = "bg_shhi1"
}

// <================== Popup & icon Show and Hide (SMS-LMS Sync) ===================>

function myFunction2_1() {
	var modal = document.getElementById("myModal2");
	modal.style.display = "none";
	var backdrop = document.getElementsByClassName("modal-backdrop");
	if (backdrop[0]) {
		backdrop[0].parentNode.removeChild(backdrop[0]);
	}

	var x = document.getElementById("myDIV2_1");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW2-1");
	if (y.style.display === "none") {
		y.style.display = "block";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi2-1")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}
}

function myFunction2_2() {
	var modal = document.getElementById("myModal2");
	modal.style.display = "none";
	var backdrop = document.getElementsByClassName("modal-backdrop");
	if (backdrop[0]) {
		backdrop[0].parentNode.removeChild(backdrop[0]);
	}

	var x = document.getElementById("myDIV2_2");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW2-2");
	if (y.style.display === "none") {
		y.style.display = "block";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi2-2")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}
}

function myFunction2_3() {
	var modal = document.getElementById("myModal2");
	modal.style.display = "none";
	var backdrop = document.getElementsByClassName("modal-backdrop");
	if (backdrop[0]) {
		backdrop[0].parentNode.removeChild(backdrop[0]);
	}

	var x = document.getElementById("myDIV2_3");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW2-3");
	if (y.style.display === "none") {
		y.style.display = "block";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi2-3")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}
}

function myFunction2_4() {
	var modal = document.getElementById("myModal2");
	modal.style.display = "none";
	var backdrop = document.getElementsByClassName("modal-backdrop");
	if (backdrop[0]) {
		backdrop[0].parentNode.removeChild(backdrop[0]);
	}

	var x = document.getElementById("myDIV2_4");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW2-4");
	if (y.style.display === "none") {
		y.style.display = "block";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi2-4")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}
}

function myFunction2_5() {
	var modal = document.getElementById("myModal2");
	modal.style.display = "none";
	var backdrop = document.getElementsByClassName("modal-backdrop");
	if (backdrop[0]) {
		backdrop[0].parentNode.removeChild(backdrop[0]);
	}

	var x = document.getElementById("myDIV2_5");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW2-5");
	if (y.style.display === "none") {
		y.style.display = "block";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi2-5")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}
}

// <================== Popup & icon Show and Hide (MISCELLANEOUS) ===================>

function myFunction3() {
	var modal = document.getElementById("myModal3");
	modal.style.display = "none";
	var backdrop = document.getElementsByClassName("modal-backdrop");
	if (backdrop[0]) {
	  backdrop[0].parentNode.removeChild(backdrop[0]);
	}

	var x = document.getElementById("myDIV3");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW3");
	if (y.style.display === "none") {
		y.style.display = "block";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi3")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}
}

function my_Function3() {
	var modal = document.getElementById("myModal3");
	modal.style.display = "none";
	var backdrop = document.getElementsByClassName("modal-backdrop");
	if (backdrop[0]) {
	  backdrop[0].parentNode.removeChild(backdrop[0]);
	}

	var x = document.getElementById("my_DIV3");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("ic_SHOW3");
	if (y.style.display === "none") {
		y.style.display = "block";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bg_shhi3")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}
}

// <================== Popup & icon Show and Hide (LMS) ===================>

function myFunction4() {
	var modal = document.getElementById("myModal4");
	modal.style.display = "none";
	var backdrop = document.getElementsByClassName("modal-backdrop");
	if (backdrop[0]) {
		backdrop[0].parentNode.removeChild(backdrop[0]);
	}

	var x = document.getElementById("myDIV4");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW4");
	if (y.style.display === "none") {
		y.style.display = "block";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi4")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}
}

function myFunction4_1() {
	var modal = document.getElementById("myModal4");
	modal.style.display = "none";
	var backdrop = document.getElementsByClassName("modal-backdrop");
	if (backdrop[0]) {
		backdrop[0].parentNode.removeChild(backdrop[0]);
	}

	var x = document.getElementById("myDIV4_1");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW4-1");
	if (y.style.display === "none") {
		y.style.display = "block";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi4-1")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}
}



function myFunction4_2() {
	var modal = document.getElementById("myModal4");
	modal.style.display = "none";
	var backdrop = document.getElementsByClassName("modal-backdrop");
	if (backdrop[0]) {
		backdrop[0].parentNode.removeChild(backdrop[0]);
	}

	var x = document.getElementById("myDIV4_2");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW4-2");
	if (y.style.display === "none") {
		y.style.display = "block";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi4-2")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}
}


function myFunction4_3() {
	var modal = document.getElementById("myModal4");
	modal.style.display = "none";
	var backdrop = document.getElementsByClassName("modal-backdrop");
	if (backdrop[0]) {
		backdrop[0].parentNode.removeChild(backdrop[0]);
	}

	var x = document.getElementById("myDIV4_3");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW4-3");
	if (y.style.display === "none") {
		y.style.display = "block";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi4-3")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}
}

// <===========================Icon Stay===================================>

// <=========================== Icon Stay card 1===================================>
function hideeye() {
	var x = document.getElementById("myDIV1");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("bgshhi1")
	z.id = "cbg1"
}

function hide_eye() {
	var x = document.getElementById("myDIV11");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("bg_shhi1")
	z.id = "cbg_1"
}

// <=========================== Icon Stay card 2 ===================================>
function hidecart_1() {
	var x = document.getElementById("myDIV2_1");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("bgshhi2-1")
	z.id = "cbg2-1"
}

function hidecart_2() {
	var x = document.getElementById("myDIV2_2");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("bgshhi2-2")
	z.id = "cbg2-2"
}

function hidecart_3() {
	var x = document.getElementById("myDIV2_3");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("bgshhi2-3")
	z.id = "cbg2-3"
}

function hidecart_4() {
	var x = document.getElementById("myDIV2_4");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("bgshhi2-4")
	z.id = "cbg2-4"
}

function hidecart_5() {
	var x = document.getElementById("myDIV2_5");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("bgshhi2-5")
	z.id = "cbg2-5"
}

// <=========================== Icon Stay card 3 ===================================>

function hidechat() {
	var x = document.getElementById("myDIV3");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("bgshhi3")
	z.id = "cbg3"
}

function hide_chat() {
	var x = document.getElementById("my_DIV3");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("bg_shhi3")
	z.id = "cbg_3"
}

// <=========================== Icon Stay card 4 ===================================>

function hideerror() {
	var x = document.getElementById("myDIV4");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("bgshhi4")
	z.id = "cbg4"
}

function hideerror_1() {
	var x = document.getElementById("myDIV4_1");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("bgshhi4-1")
	z.id = "cbg4-1"
}


function hideerror_2() {
	var x = document.getElementById("myDIV4_2");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("bgshhi4-2")
	z.id = "cbg4-2"
}



function hideerror_3() {
	var x = document.getElementById("myDIV4_3");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("bgshhi4-3")
	z.id = "cbg4-3"
}

// <============================== Close Function ====================================>

// <============================== Close Function card 1 ====================================>

function closeKARO1() {
	var x = document.getElementById("myDIV1");
	if (x.style.display === "none") {
		x.style.display = "none";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW1");
	if (y.style.display === "none") {
		y.style.display = "none";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi1")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}

	var w = document.getElementById("cbg1")
	if (w.style.display === "none") {
		w.style.display = "none";
	} else {
		w.style.display = "none";
	}
}

function close_KARO1() {
	var x = document.getElementById("myDIV11");
	if (x.style.display === "none") {
		x.style.display = "none";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("ic_SHOW1");
	if (y.style.display === "none") {
		y.style.display = "none";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bg_shhi1")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}

	var w = document.getElementById("cbg_1")
	if (w.style.display === "none") {
		w.style.display = "none";
	} else {
		w.style.display = "none";
	}
}

// <============================== Close Function card 2 ====================================>
function closeKARO2_1() {
	var x = document.getElementById("myDIV2_1");
	if (x.style.display === "none") {
		x.style.display = "none";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW2-1");
	if (y.style.display === "none") {
		y.style.display = "none";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi2-1")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}

	var w = document.getElementById("cbg2-1")
	if (w.style.display === "none") {
		w.style.display = "none";
	} else {
		w.style.display = "none";
	}
}

function closeKARO2_2() {
	var x = document.getElementById("myDIV2_2");
	if (x.style.display === "none") {
		x.style.display = "none";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW2-2");
	if (y.style.display === "none") {
		y.style.display = "none";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi2-2")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}

	var w = document.getElementById("cbg2-2")
	if (w.style.display === "none") {
		w.style.display = "none";
	} else {
		w.style.display = "none";
	}
}

function closeKARO2_3() {
	var x = document.getElementById("myDIV2_3");
	if (x.style.display === "none") {
		x.style.display = "none";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW2-3");
	if (y.style.display === "none") {
		y.style.display = "none";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi2-3")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}

	var w = document.getElementById("cbg2-3")
	if (w.style.display === "none") {
		w.style.display = "none";
	} else {
		w.style.display = "none";
	}
}

function closeKARO2_4() {
	var x = document.getElementById("myDIV2_4");
	if (x.style.display === "none") {
		x.style.display = "none";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW2-4");
	if (y.style.display === "none") {
		y.style.display = "none";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi2-4")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}

	var w = document.getElementById("cbg2-4")
	if (w.style.display === "none") {
		w.style.display = "none";
	} else {
		w.style.display = "none";
	}
}

function closeKARO2_5() {
	var x = document.getElementById("myDIV2_5");
	if (x.style.display === "none") {
		x.style.display = "none";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW2-5");
	if (y.style.display === "none") {
		y.style.display = "none";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi2-5")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}

	var w = document.getElementById("cbg2-5")
	if (w.style.display === "none") {
		w.style.display = "none";
	} else {
		w.style.display = "none";
	}
}

// <============================== Close Function card 3 ====================================>

function closeKARO3() {
	var x = document.getElementById("myDIV3");
	if (x.style.display === "none") {
		x.style.display = "none";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW3");
	if (y.style.display === "none") {
		y.style.display = "none";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi3")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}

	var w = document.getElementById("cbg3")
	if (w.style.display === "none") {
		w.style.display = "none";
	} else {
		w.style.display = "none";
	}
}

function close_KARO3() {
	var x = document.getElementById("my_DIV3");
	if (x.style.display === "none") {
		x.style.display = "none";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("ic_SHOW3");
	if (y.style.display === "none") {
		y.style.display = "none";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bg_shhi3")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}

	var w = document.getElementById("cbg_3")
	if (w.style.display === "none") {
		w.style.display = "none";
	} else {
		w.style.display = "none";
	}
}

// <============================== Close Function card 4 ====================================>

function closeKARO4() {
	var x = document.getElementById("myDIV4");
	if (x.style.display === "none") {
		x.style.display = "none";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW4");
	if (y.style.display === "none") {
		y.style.display = "none";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi4")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}

	var w = document.getElementById("cbg3")
	if (w.style.display === "none") {
		w.style.display = "none";
	} else {
		w.style.display = "none";
	}
}

function closeKARO4_1() {
	var x = document.getElementById("myDIV4_1");
	if (x.style.display === "none") {
		x.style.display = "none";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW4-1");
	if (y.style.display === "none") {
		y.style.display = "none";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi4-1")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}

	var w = document.getElementById("cbg4-1")
	if (w.style.display === "none") {
		w.style.display = "none";
	} else {
		w.style.display = "none";
	}
}



function closeKARO4_2() {
	var x = document.getElementById("myDIV4_2");
	if (x.style.display === "none") {
		x.style.display = "none";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW4-2");
	if (y.style.display === "none") {
		y.style.display = "none";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi4-2")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}

	var w = document.getElementById("cbg4-2")
	if (w.style.display === "none") {
		w.style.display = "none";
	} else {
		w.style.display = "none";
	}
}


function closeKARO4_3() {
	var x = document.getElementById("myDIV4_3");
	if (x.style.display === "none") {
		x.style.display = "none";
	} else {
		x.style.display = "none";
	}

	var y = document.getElementById("icSHOW4-3");
	if (y.style.display === "none") {
		y.style.display = "none";
	} else {
		y.style.display = "none";
	}

	var z = document.getElementById("bgshhi4-3")
	if (z.style.display === "none") {
		z.style.display = "block";
	} else {
		z.style.display = "none";
	}

	var w = document.getElementById("cbg4-3")
	if (w.style.display === "none") {
		w.style.display = "none";
	} else {
		w.style.display = "none";
	}
}

// <========================icon click show ===========================>

// <========================icon click show card 1 ===========================>

function iconCLICKSH1() {
	var x = document.getElementById("myDIV1");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("cbg1")
	z.id = "bgshhi1"
}

function icon_CLICKSH1() {
	var x = document.getElementById("myDIV11");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("cbg_1")
	z.id = "bg_shhi1"
}

// <========================icon click show card 2 ===========================>

function iconCLICKSH2_1() {
	var x = document.getElementById("myDIV2_1");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("cbg2-1")
	z.id = "bgshhi2-1"
}

function iconCLICKSH2_2() {
	var x = document.getElementById("myDIV2_2");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("cbg2-2")
	z.id = "bgshhi2-2"
}

function iconCLICKSH2_3() {
	var x = document.getElementById("myDIV2_3");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("cbg2-3")
	z.id = "bgshhi2-3"
}

function iconCLICKSH2_4() {
	var x = document.getElementById("myDIV2_4");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("cbg2-4")
	z.id = "bgshhi2-4"
}

function iconCLICKSH2_5() {
	var x = document.getElementById("myDIV2_5");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("cbg2-5")
	z.id = "bgshhi2-5"
}

// <========================icon click show card 3 ===========================>

function iconCLICKSH3() {
	var x = document.getElementById("myDIV3");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("cbg3")
	z.id = "bgshhi3"
}

function icon_CLICKSH3() {
	var x = document.getElementById("my_DIV3");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("cbg_3")
	z.id = "bg_shhi3"
}

// <========================icon click show card 4 ===========================>

function iconCLICKSH4() {
	var x = document.getElementById("myDIV4");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("cbg4")
	z.id = "bgshhi4"
}

function iconCLICKSH4_1() {
	var x = document.getElementById("myDIV4_1");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("cbg4-1")
	z.id = "bgshhi4-1"
}


function iconCLICKSH4_2() {
	var x = document.getElementById("myDIV4_2");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("cbg4-2")
	z.id = "bgshhi4-2"
}


function iconCLICKSH4_3() {
	var x = document.getElementById("myDIV4_3");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

	var z = document.getElementById("cbg4-3")
	z.id = "bgshhi4-3"
}

// <======================Maximize=========================>

// <====================== Maximize card 1 =========================>
let isMaximized1 = false;
function max1() {

	if (isMaximized1) {

		myDIV1.style.width = "";
		myDIV1.style.height = "";
		myDIV1.style.top = "";
		myDIV1.style.left = "";
		myDIV1.classList.remove("mystyle");
		isMaximized1 = false;
	}
	else {
		myDIV1.style.width = "100%";
		myDIV1.style.height = "100%";
		myDIV1.style.top = "0";
		myDIV1.style.left = "0";
		myDIV1.classList.add("mystyle");
		isMaximized1 = true;
	}

}

let isMaximized11 = false;
function max11() {

	if (isMaximized11) {

		myDIV11.style.width = "";
		myDIV11.style.height = "";
		myDIV11.style.top = "";
		myDIV11.style.left = "";
		myDIV11.classList.remove("mystyle");
		isMaximized11 = false;
	}
	else {
		myDIV11.style.width = "100%";
		myDIV11.style.height = "100%";
		myDIV11.style.top = "0";
		myDIV11.style.left = "0";
		myDIV11.classList.add("mystyle");
		isMaximized11 = true;
	}

}

// <====================== Maximize card 2 =========================>
let isMaximized2_1 = false;
function max2_1() {
	if (isMaximized2_1) {
		myDIV2_1.style.width = "";
		myDIV2_1.style.height = "";
		myDIV2_1.style.top = "";
		myDIV2_1.style.left = "";
		myDIV2_1.classList.remove("mystyle");
		isMaximized2_1 = false;
	} else {
		myDIV2_1.style.width = "100%";
		myDIV2_1.style.height = "100%";
		myDIV2_1.style.top = "0";
		myDIV2_1.style.left = "0";
		myDIV2_1.classList.add("mystyle");
		isMaximized2_1 = true;
	}
}

let isMaximized2_2 = false;
function max2_2() {
	if (isMaximized2_2) {
		myDIV2_2.style.width = "";
		myDIV2_2.style.height = "";
		myDIV2_2.style.top = "";
		myDIV2_2.style.left = "";
		myDIV2_2.classList.remove("mystyle");
		isMaximized2_2 = false;
	} else {
		myDIV2_2.style.width = "100%";
		myDIV2_2.style.height = "100%";
		myDIV2_2.style.top = "0";
		myDIV2_2.style.left = "0";
		myDIV2_2.classList.add("mystyle");
		isMaximized2_2 = true;
	}
}

let isMaximized2_3 = false;
function max2_3() {
	if (isMaximized2_3) {
		myDIV2_3.style.width = "";
		myDIV2_3.style.height = "";
		myDIV2_3.style.top = "";
		myDIV2_3.style.left = "";
		myDIV2_3.classList.remove("mystyle");
		isMaximized2_3 = false;
	} else {
		myDIV2_3.style.width = "100%";
		myDIV2_3.style.height = "100%";
		myDIV2_3.style.top = "0";
		myDIV2_3.style.left = "0";
		myDIV2_3.classList.add("mystyle");
		isMaximized2_3 = true;
	}
}

let isMaximized2_4 = false;
function max2_4() {
	if (isMaximized2_4) {
		myDIV2_4.style.width = "";
		myDIV2_4.style.height = "";
		myDIV2_4.style.top = "";
		myDIV2_4.style.left = "";
		myDIV2_4.classList.remove("mystyle");
		isMaximized2_4 = false;
	} else {
		myDIV2_4.style.width = "100%";
		myDIV2_4.style.height = "100%";
		myDIV2_4.style.top = "0";
		myDIV2_4.style.left = "0";
		myDIV2_4.classList.add("mystyle");
		isMaximized2_4 = true;
	}
}

let isMaximized2_5 = false;
function max2_5() {
	if (isMaximized2_5) {
		myDIV2_5.style.width = "";
		myDIV2_5.style.height = "";
		myDIV2_5.style.top = "";
		myDIV2_5.style.left = "";
		myDIV2_5.classList.remove("mystyle");
		isMaximized2_5 = false;
	} else {
		myDIV2_5.style.width = "100%";
		myDIV2_5.style.height = "100%";
		myDIV2_5.style.top = "0";
		myDIV2_5.style.left = "0";
		myDIV2_5.classList.add("mystyle");
		isMaximized2_5 = true;
	}
}

// <====================== Maximize card 3 =========================>

let isMaximized3 = false;
function max3() {
	if (isMaximized3) {
		myDIV3.style.width = "";
		myDIV3.style.height = "";
		myDIV3.style.top = "";
		myDIV3.style.left = "";
		myDIV3.classList.remove("mystyle");
		isMaximized3 = false;
	} else {
		myDIV3.style.width = "100%";
		myDIV3.style.height = "100%";
		myDIV3.style.top = "0";
		myDIV3.style.left = "0";
		myDIV3.classList.add("mystyle");
		isMaximized3 = true;
	}
}

let isMaximized_3 = false;
function max_3() {
	if (isMaximized_3) {
		my_DIV3.style.width = "";
		my_DIV3.style.height = "";
		my_DIV3.style.top = "";
		my_DIV3.style.left = "";
		my_DIV3.classList.remove("mystyle");
		isMaximized_3 = false;
	} else {
		my_DIV3.style.width = "100%";
		my_DIV3.style.height = "100%";
		my_DIV3.style.top = "0";
		my_DIV3.style.left = "0";
		my_DIV3.classList.add("mystyle");
		isMaximized_3 = true;
	}
}

// <====================== Maximize card 4 =========================>

let isMaximized4 = false;
function max4() {
	if (isMaximized4) {
		myDIV4.style.width = "";
		myDIV4.style.height = "";
		myDIV4.style.top = "";
		myDIV4.style.left = "";
		myDIV4.classList.remove("mystyle");
		isMaximized4 = false;
	} else {
		myDIV4.style.width = "100%";
		myDIV4.style.height = "100%";
		myDIV4.style.top = "0";
		myDIV4.style.left = "0";
		myDIV4.classList.add("mystyle");
		isMaximized4 = true;
	}
}

let isMaximized4_1 = false;
function max4_1() {
	if (isMaximized4_1) {
		myDIV4_1.style.width = "";
		myDIV4_1.style.height = "";
		myDIV4_1.style.top = "";
		myDIV4_1.style.left = "";
		myDIV4_1.classList.remove("mystyle");
		isMaximized4_1 = false;
	} else {
		myDIV4_1.style.width = "100%";
		myDIV4_1.style.height = "100%";
		myDIV4_1.style.top = "0";
		myDIV4_1.style.left = "0";
		myDIV4_1.classList.add("mystyle");
		isMaximized4_1 = true;
	}
}

let isMaximized4_2 = false;
function max4_2() {
	if (isMaximized4_2) {
		myDIV4_2.style.width = "";
		myDIV4_2.style.height = "";
		myDIV4_2.style.top = "";
		myDIV4_2.style.left = "";
		myDIV4_2.classList.remove("mystyle");
		isMaximized4_2 = false;
	} else {
		myDIV4_2.style.width = "100%";
		myDIV4_2.style.height = "100%";
		myDIV4_2.style.top = "0";
		myDIV4_2.style.left = "0";
		myDIV4_2.classList.add("mystyle");
		isMaximized4_2 = true;
	}
}

let isMaximized4_3 = false;
function max4_3() {
	if (isMaximized4_3) {
		myDIV4_3.style.width = "";
		myDIV4_3.style.height = "";
		myDIV4_3.style.top = "";
		myDIV4_3.style.left = "";
		myDIV4_3.classList.remove("mystyle");
		isMaximized4_3 = false;
	} else {
		myDIV4_3.style.width = "100%";
		myDIV4_3.style.height = "100%";
		myDIV4_3.style.top = "0";
		myDIV4_3.style.left = "0";
		myDIV4_3.classList.add("mystyle");
		isMaximized4_3 = true;
	}
}

//<===============================Maximize icon togle ==============================>

//<=============================== Maximize icon togle (card 1) ==============================>
function changeIcon1() {
	var icon1 = document.getElementById("icon1");
	if (icon1.classList.contains("fa-square")) {
		icon1.classList.remove("fa-square");
		icon1.classList.add("fa-window-restore");
	} else {
		icon1.classList.remove("fa-window-restore");
		icon1.classList.add("fa-square");
	}
}

function change_Icon1() {
	var icon_1 = document.getElementById("icon_1");
	if (icon_1.classList.contains("fa-square")) {
		icon_1.classList.remove("fa-square");
		icon_1.classList.add("fa-window-restore");
	} else {
		icon_1.classList.remove("fa-window-restore");
		icon_1.classList.add("fa-square");
	}
}

//<=============================== Maximize icon togle (card 2) ==============================>
function changeIcon2_1() {
	var icon2_1 = document.getElementById("icon2_1");
	if (icon2_1.classList.contains("fa-square")) {
		icon2_1.classList.remove("fa-square");
		icon2_1.classList.add("fa-window-restore");
	} else {
		icon2_1.classList.remove("fa-window-restore");
		icon2_1.classList.add("fa-square");
	}
}

function changeIcon2_2() {
	var icon2_2 = document.getElementById("icon2_2");
	if (icon2_2.classList.contains("fa-square")) {
		icon2_2.classList.remove("fa-square");
		icon2_2.classList.add("fa-window-restore");
	} else {
		icon2_2.classList.remove("fa-window-restore");
		icon2_2.classList.add("fa-square");
	}
}

function changeIcon2_3() {
	var icon2_3 = document.getElementById("icon2_3");
	if (icon2_3.classList.contains("fa-square")) {
		icon2_3.classList.remove("fa-square");
		icon2_3.classList.add("fa-window-restore");
	} else {
		icon2_3.classList.remove("fa-window-restore");
		icon2_3.classList.add("fa-square");
	}
}

function changeIcon2_4() {
	var icon2_4 = document.getElementById("icon2_4");
	if (icon2_4.classList.contains("fa-square")) {
		icon2_4.classList.remove("fa-square");
		icon2_4.classList.add("fa-window-restore");
	} else {
		icon2_4.classList.remove("fa-window-restore");
		icon2_4.classList.add("fa-square");
	}
}

function changeIcon2_5() {
	var icon2_5 = document.getElementById("icon2_5");
	if (icon2_5.classList.contains("fa-square")) {
		icon2_5.classList.remove("fa-square");
		icon2_5.classList.add("fa-window-restore");
	} else {
		icon2.classList.remove("fa-window-restore");
		icon2.classList.add("fa-square");
	}
}
//<=============================== Maximize icon togle (card 3) ==============================>
function changeIcon3() {
	var icon3 = document.getElementById("icon3");
	if (icon3.classList.contains("fa-square")) {
		icon3.classList.remove("fa-square");
		icon3.classList.add("fa-window-restore");
	} else {
		icon3.classList.remove("fa-window-restore");
		icon3.classList.add("fa-square");
	}
}

function change_Icon3() {
	var icon_3 = document.getElementById("icon_3");
	if (icon_3.classList.contains("fa-square")) {
		icon_3.classList.remove("fa-square");
		icon_3.classList.add("fa-window-restore");
	} else {
		icon_3.classList.remove("fa-window-restore");
		icon_3.classList.add("fa-square");
	}
}

//<=============================== Maximize icon togle (card 4) ==============================>

function changeIcon4() {
	var icon4 = document.getElementById("icon4");
	if (icon4.classList.contains("fa-square")) {
		icon4.classList.remove("fa-square");
		icon4.classList.add("fa-window-restore");
	} else {
		icon4.classList.remove("fa-window-restore");
		icon4.classList.add("fa-square");
	}
}

function changeIcon4_1() {
	var icon4_1 = document.getElementById("icon4_1");
	if (icon4_1.classList.contains("fa-square")) {
		icon4_1.classList.remove("fa-square");
		icon4_1.classList.add("fa-window-restore");
	} else {
		icon4_1.classList.remove("fa-window-restore");
		icon4_1.classList.add("fa-square");
	}
}


function changeIcon4_2() {
	var icon4_2 = document.getElementById("icon4_2");
	if (icon4_2.classList.contains("fa-square")) {
		icon4_2.classList.remove("fa-square");
		icon4_2.classList.add("fa-window-restore");
	} else {
		icon4_2.classList.remove("fa-window-restore");
		icon4_2.classList.add("fa-square");
	}
}


function changeIcon4_3() {
	var icon4_3 = document.getElementById("icon4_3");
	if (icon4_3.classList.contains("fa-square")) {
		icon4_3.classList.remove("fa-square");
		icon4_3.classList.add("fa-window-restore");
	} else {
		icon4_3.classList.remove("fa-window-restore");
		icon4_3.classList.add("fa-square");
	}
}

// $(document).ready(function () {
// 	$(".action").on("click", function () {
// 		$(".menu").toggleClass("active");
// 	});
// });


// function dropdownbtn() {
// 	var x = document.getElementById("myDropdown");
// 	if (x.style.display === "none") {
// 		x.style.display = "block";
// 	} else {
// 		x.style.display = "none";
// 	}
// }

// =======================user account dropdown===================================================

// ======================= responsive side bar ===================================================
$(function () { $('[data-toggle="tooltip"]').tooltip() }), jQuery(document).ready(function () { jQuery(".scrollbar-inner").scrollbar() }), $(document).ready(function () {
	var t = !1, o = !1, e = 0, a = 0
	t || ($toggle = $(".sidenav-toggler"), $toggle.click(function () { 1 == e ? ($("html").removeClass("nav_open"), $toggle.removeClass("toggled"), e = 0) : ($("html").addClass("nav_open"), $toggle.addClass("toggled"), e = 1) }), t = !0), o || ($topbar = $(".topbar-toggler"), $topbar.click(function () { 1 == a ? ($("html").removeClass("topbar_open"), $topbar.removeClass("toggled"), a = 0) : ($("html").addClass("topbar_open"), $topbar.addClass("toggled"), a = 1) }), o = !0), $('[data-select="checkbox"]').change(function () { $target = $(this).attr("data-target"), $($target).prop("checked", $(this).prop("checked")) })
})

// ======================================= hex code in popup ==========================

// ================== first popup ========================

const circle = document.getElementById("circle");

setInterval(function () {
	const text = circle.textContent;
	const hex = getHexCode(text);
	circle.style.backgroundColor = hex;
}, 500);


function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

const circle_1 = document.getElementById("circle_1");

setInterval(function () {
	const text = circle_1.textContent;
	const hex = getHexCode(text);
	circle_1.style.backgroundColor = hex;
}, 500);

function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

// ================== second popup ========================

const circle2_1 = document.getElementById("circle2-1");


setInterval(function () {
	const text = circle2_1.textContent;
	const hex = getHexCode(text);
	circle2_1.style.backgroundColor = hex;
}, 500);


function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

const circle2_2 = document.getElementById("circle2-2");

setInterval(function () {
	const text = circle2_2.textContent;
	const hex = getHexCode(text);
	circle2_2.style.backgroundColor = hex;
}, 500);


function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

const circle2_3 = document.getElementById("circle2-3");

setInterval(function () {
	const text = circle2_3.textContent;
	const hex = getHexCode(text);
	circle2_3.style.backgroundColor = hex;
}, 500);


function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

const circle2_4 = document.getElementById("circle2-4");

setInterval(function () {
	const text = circle2_4.textContent;
	const hex = getHexCode(text);
	circle2_4.style.backgroundColor = hex;
}, 500);


function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

const circle2_5 = document.getElementById("circle2-5");

setInterval(function () {
	const text = circle2_5.textContent;
	const hex = getHexCode(text);
	circle2_5.style.backgroundColor = hex;
}, 500);


function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

// ================== third popup ========================

const circle3 = document.getElementById("circle3");


setInterval(function () {
	const text = circle3.textContent;
	const hex = getHexCode(text);
	circle3.style.backgroundColor = hex;
}, 500);


function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

const circle_3 = document.getElementById("circle-3");

setInterval(function () {
	const text = circle_3.textContent;
	const hex = getHexCode(text);
	circle_3.style.backgroundColor = hex;
}, 500);


function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

// ================== fourth popup ========================

const circle4 = document.getElementById("circle4");


setInterval(function () {
	const text = circle4.textContent;
	const hex = getHexCode(text);
	circle4.style.backgroundColor = hex;
}, 500);


function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}


const circle4_1= document.getElementById("circle4_1");


setInterval(function () {
	const text = circle4_1.textContent;
	const hex = getHexCode(text);
	circle4_1.style.backgroundColor = hex;
}, 500);


function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}


const circle4_2= document.getElementById("circle4_2");


setInterval(function () {
	const text = circle4_2.textContent;
	const hex = getHexCode(text);
	circle4_2.style.backgroundColor = hex;
}, 500);


function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}


const circle4_3= document.getElementById("circle4_3");


setInterval(function () {
	const text = circle4_3.textContent;
	const hex = getHexCode(text);
	circle4_3.style.backgroundColor = hex;
}, 500);


function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

// =======================================hex code for sidebar=============================

// ==========================side bar icon 1 ==============================

const circle11 = document.getElementById("circle11");

setInterval(function () {
	const text = circle11.textContent;
	const hex = getHexCode(text);
	circle11.style.backgroundColor = hex;
}, 500);

function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

const circle_11 = document.getElementById("circle_11");

setInterval(function () {
	const text = circle_11.textContent;
	const hex = getHexCode(text);
	circle_11.style.backgroundColor = hex;
}, 500);

function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}
// ==========================side bar icon 2 ==============================

const circle12_1 = document.getElementById("circle12-1");

setInterval(function () {
	const text = circle12_1.textContent;
	const hex = getHexCode(text);
	circle12_1.style.backgroundColor = hex;
}, 500);

function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

const circle12_2 = document.getElementById("circle12-2");

setInterval(function () {
	const text = circle12_2.textContent;
	const hex = getHexCode(text);
	circle12_2.style.backgroundColor = hex;
}, 500);

function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

const circle12_3 = document.getElementById("circle12-3");

setInterval(function () {
	const text = circle12_3.textContent;
	const hex = getHexCode(text);
	circle12_3.style.backgroundColor = hex;
}, 500);

function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

const circle12_4 = document.getElementById("circle12-4");

setInterval(function () {
	const text = circle12_4.textContent;
	const hex = getHexCode(text);
	circle12_4.style.backgroundColor = hex;
}, 500);

function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

const circle12_5 = document.getElementById("circle12-5");

setInterval(function () {
	const text = circle12_5.textContent;
	const hex = getHexCode(text);
	circle12_5.style.backgroundColor = hex;
}, 500);

function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}
// ============================side bar icon 3 =========================

const circle13 = document.getElementById("circle13");

setInterval(function () {
	const text = circle13.textContent;
	const hex = getHexCode(text);
	circle13.style.backgroundColor = hex;
}, 500);

function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

const circle_13 = document.getElementById("circle_13");

setInterval(function () {
	const text = circle_13.textContent;
	const hex = getHexCode(text);
	circle_13.style.backgroundColor = hex;
}, 500);

function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

// ============================side bar icon 4 =========================

const circle14 = document.getElementById("circle14");

setInterval(function () {
	const text = circle14.textContent;
	const hex = getHexCode(text);
	circle14.style.backgroundColor = hex;
}, 500);

function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}

const circle14_1 = document.getElementById("circle14_1");

setInterval(function () {
	const text = circle14_1.textContent;
	const hex = getHexCode(text);
	circle14_1.style.backgroundColor = hex;
}, 500);

function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}


const circle14_2 = document.getElementById("circle14_2");

setInterval(function () {
	const text = circle14_2.textContent;
	const hex = getHexCode(text);
	circle14_2.style.backgroundColor = hex;
}, 500);

function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}


const circle14_3 = document.getElementById("circle14_3");

setInterval(function () {
	const text = circle14_3.textContent;
	const hex = getHexCode(text);
	circle14_3.style.backgroundColor = hex;
}, 500);

function getHexCode(text) {
	let hash = 0;

	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}

	let hex = "";

	for (let i = 0; i < 3; i++) {
		let value = (hash >> (i * 8)) & 0xff;
		hex += value.toString(16).padStart(2, "0");
	}

	return `#${hex}`;
}