/* Changing backgrounds between templates*/

Template.portal.onRendered(function() {
  $('body').addClass('backgroundYellowBlue');
});
Template.portal.onDestroyed(function() {
  $('body').removeClass('backgroundYellowBlue');
});

Template.home.onRendered(function() {
  $('body').addClass('backgroundWatermelon');
  $('#fade-in-2').addClass('fadeIn2');
  $('#fade-in-3').addClass('fadeIn3');
  $('#more-about-me').hide();
  $('#collapse-button').hide();
});
Template.home.onDestroyed(function() {
  $('body').removeClass('backgroundWatermelon');
});

Template.contact.onRendered(function() {
  $('body').addClass('backgroundLaFrance');
});
Template.contact.onDestroyed(function() {
  $('body').removeClass('backgroundLaFrance');
});

/*Forms & Events*/
Template.home.events({
  'click #expand-button'(event) {
    $('#more-about-me').show();
    $('#expand-button').hide();
    $('#collapse-button').show();
    $('#welcome-message').hide();
  },
  'click #collapse-button'(event) {
    $('#more-about-me').hide();
    $('#collapse-button').hide();
    $('#expand-button').show();
    $('#welcome-message').show();
    $('#fade-in-2').removeClass('fadeIn2');
    $('#fade-in-3').removeClass('fadeIn3');
  },
})

/* Email */
Template.contact.events({
  'click #submit-message':function(e,t){
      alert("Sorry, this form is not working right now. Please send me an email at crystalchen@ucla.edu. Thank you.")
    // var sendername = t.find("#sender-name").value;
    // var sendercontact = t.find("#sender-contact").value;
    // var message = t.find("#message").value;
    //
    // if (sendername == undefined || sendercontact == undefined || message == undefined) {
    //   alert("Please complete the form.")
    // } else {
    //   Meteor.call("sendEmail", "51614cc@gmail.com", "contactcrystalchen@gmail.com", "Website Contact Form", message );
    //     console.log("your name is" + sendername);
    //     console.log("email sent");
    //
    //   $(".ContactForm")[0].reset();
    //   // FlowRouter.go("/submitted")
    // }
  }
});

/* ThreeJS */
Template.oldhome.onRendered(function() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 800);
  var renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setClearColor( 0xffffff, 0 );
  renderer.setSize(750, 750);
  $(".threejscube-container")[0].appendChild(renderer.domElement);
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
  });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;
  var render = function() {
    requestAnimationFrame(render);
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    renderer.render(scene, camera);
  };
  render();
});



Template.contact.events({
  'click #submit-button':function(e,t){
    console.log("clicked");
    // var name = t.find("#name").value;
    // var emailorphone = t.find("#emailorphone").value;
    // var message = t.find("#message").value;
    // var emailbody = "from: " + name + "\ncontact: " + emailorphone + "\nmessage: " + message;
    alert("This site is deprecated; please use my new site to contact me. Thank you!")
    // if (name == "" || emailorphone == "" || message == "") {
    //   alert("Please complete the form so I can receive your message!")
    // } else {
    //   Meteor.call("sendEmail", emailbody);
    //   console.log("email sent");
    //   $("#contact-me")[0].reset();
    //   FlowRouter.go("/submitted")
    // }
  }
});
//
// Template.submitted.events({
//   'click #back-button':function(){
//     FlowRouter.go("/contact")
//   }
// })


// other stuff
// Template.playground.onRendered(function playgroundOnRendered() {
//   var vertexShaderText =
//   [
//   'precision mediump float;',
//   '',
//   'attribute vec2 vertPosition;',
//   'attribute vec3 vertColor;',
//   'varying vec3 fragColor;',
//   '',
//   'void main()',
//   '{',
//   '  fragColor = vertColor;',
//   '  gl_Position = vec4(vertPosition, 0.0, 1.0);',
//   '}'
//   ].join('\n');
//
//   var fragmentShaderText =
//   [
//   'precision mediump float;',
//   '',
//   'varying vec3 fragColor;',
//   'void main()',
//   '{',
//   '  gl_FragColor = vec4(fragColor, 1.0);',
//   '}'
//   ].join('\n');
//
//   	console.log('This is working');
//
//   	var canvas = document.getElementById('game-surface');
//   	var gl = canvas.getContext('webgl');
//
//   	if (!gl) {
//   		console.log('WebGL not supported, falling back on experimental-webgl');
//   		gl = canvas.getContext('experimental-webgl');
//   	}
//
//   	if (!gl) {
//   		alert('Your browser does not support WebGL');
//   	}
//
//   	gl.clearColor(0.75, 0.85, 0.8, 1.0);
//   	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
//
//   	//
//   	// Create shaders
//   	//
//   	var vertexShader = gl.createShader(gl.VERTEX_SHADER);
//   	var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
//
//   	gl.shaderSource(vertexShader, vertexShaderText);
//   	gl.shaderSource(fragmentShader, fragmentShaderText);
//
//   	gl.compileShader(vertexShader);
//   	if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
//   		console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertexShader));
//   		return;
//   	}
//
//   	gl.compileShader(fragmentShader);
//   	if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
//   		console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fragmentShader));
//   		return;
//   	}
//
//   	var program = gl.createProgram();
//   	gl.attachShader(program, vertexShader);
//   	gl.attachShader(program, fragmentShader);
//   	gl.linkProgram(program);
//   	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
//   		console.error('ERROR linking program!', gl.getProgramInfoLog(program));
//   		return;
//   	}
//   	gl.validateProgram(program);
//   	if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
//   		console.error('ERROR validating program!', gl.getProgramInfoLog(program));
//   		return;
//   	}
//
//   	//
//   	// Create buffer
//   	//
//   	var triangleVertices =
//   	[ // X, Y,       R, G, B
//   		0.0, 0.5,    1.0, 1.0, 0.0,
//   		-0.5, -0.5,  0.7, 0.0, 1.0,
//   		0.5, -0.5,   0.1, 1.0, 0.6
//   	];
//
//   	var triangleVertexBufferObject = gl.createBuffer();
//   	gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);
//   	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);
//
//   	var positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');
//   	var colorAttribLocation = gl.getAttribLocation(program, 'vertColor');
//   	gl.vertexAttribPointer(
//   		positionAttribLocation, // Attribute location
//   		2, // Number of elements per attribute
//   		gl.FLOAT, // Type of elements
//   		gl.FALSE,
//   		5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
//   		0 // Offset from the beginning of a single vertex to this attribute
//   	);
//   	gl.vertexAttribPointer(
//   		colorAttribLocation, // Attribute location
//   		3, // Number of elements per attribute
//   		gl.FLOAT, // Type of elements
//   		gl.FALSE,
//   		5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
//   		2 * Float32Array.BYTES_PER_ELEMENT // Offset from the beginning of a single vertex to this attribute
//   	);
//
//   	gl.enableVertexAttribArray(positionAttribLocation);
//   	gl.enableVertexAttribArray(colorAttribLocation);
//
//   	//
//   	// Main render loop
//   	//
//   	gl.useProgram(program);
//   	gl.drawArrays(gl.TRIANGLES, 0, 3);
//
//
// });
//
//
//
//
//
// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
