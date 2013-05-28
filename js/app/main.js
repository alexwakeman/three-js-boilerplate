var Template = Template || {};

Template.Main = {
    camera : null,
    scene : null,
    renderer : null,
    container : null,
    stats : null,
    projector : null,
    parentObj : null,
    
    frameFloat : 0.0,
    frameInt : 0,
    
    init : function() {
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
        this.camera.position.z = 400;
        this.scene = new THREE.Scene();
        this.projector = new THREE.Projector();
        var light = new THREE.DirectionalLight(0xffffff);
        light.position.set(0, 1, 200);
        this.scene.add(light);
        
        this.renderer = new THREE.WebGLRenderer(); // or canvas, svg
    	this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);
        
        this.parentObj = new THREE.Object3D();
        this.scene.add(this.parentObj);
        
        this.stats = new Stats();
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.top = '0px';
        this.container.appendChild(this.stats.domElement);
        
        this.container.addEventListener('mousedown', this.onDocumentMouseDown, false);
        this.container.addEventListener('mouseup', this.onDocumentMouseUp, false);
        this.container.addEventListener('mousemove', this.onDocumentMouseMove, false);
    },
    
    animate : function() {
        window.requestAnimationFrame(Template.Main.animate);
        this.render();
    },
    
    render : function() {
        this.renderer.render(this.scene, this.camera);
    },
    
    getIntersects : function(event, parent) {
        var vector = new THREE.Vector3((event.clientX / window.innerWidth ) * 2 - 1, - (event.clientY / window.innerHeight) * 2 + 1, 0.5);
        Template.Main.projector.unprojectVector(vector, Template.Main.camera);
        var raycaster = new THREE.Raycaster(Template.Main.camera.position, vector.sub(Template.Main.camera.position).normalize());
        var intersects = raycaster.intersectObject(parent);
        return intersects;
    },
                                   
    collision : function(a, b) { // both a and b are THREE.Mesh objects with radius property too!
        var aPos = {};
        aPos.x = a.position.x;
        aPos.y = a.position.y;
        aPos.z = a.position.z;

        var bPos = {};
        bPos.x = b.position.x;
        bPos.y = b.position.y;
        bPos.z = b.position.z;

        var d = {}
        d.x = aPos.x - bPos.x;
        d.y = aPos.y - bPos.y;
        d.z = aPos.z - bPos.z;

        var sumRadius = a.radius + b.radius;
    	
        d.distance = Math.sqrt(Math.pow(d.x, 2) + Math.pow(d.y, 2) + Math.pow(d.z, 2));

        if (d.distance < sumRadius) { // collision
            return true;
        }
        else {
            return false;
        }
    },
    
    degsToRads : function(degs) {
        return degs * (Math.PI/180);
    },
    ////// EVENT HANDLERS
    
    onDocumentMouseDown : function(event) {
        
    },
    
    onDocumentMouseUp : function(event) {
        
    },
    
    onDocumentMouseMove : function(event) {
        
    }
}
