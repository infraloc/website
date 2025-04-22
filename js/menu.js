document.addEventListener('DOMContentLoaded', function() {

    let menuToggle = document.querySelector('.menu-toggle');
    

    if (!menuToggle) {
        menuToggle = document.createElement('div');
        menuToggle.className = 'menu-toggle';
        
        menuToggle.innerHTML = '<span></span><span></span><span></span>';
        
       
        const header = document.querySelector('header');
        header.prepend(menuToggle);
    }
    
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        

        if (this.textContent) {
            this.textContent = this.classList.contains('active') ? '✕' : '☰';
        }
    });
    
    
});