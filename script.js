// Données des produits avec noms de fichiers d'images
        const products = [
            {
                id: 1,
                name: "Gel Aloe Vera",
                price: 7700,
                category: "cosmetiques",
                description: "Ce gel, riche en glycérine végétale, contient 85% d'aloe vera. C'est un allié multi-usage pour le visage, le corps et les cheveux.",
                image: "image/b.jpg"
            },
            {
                id: 2,
                name: "Huile d'Argan",
                price: 11900,
                category: "cosmetiques",
                description: "100% pure, biologique et pressée à froid. Riche en oméga 6 et 9, cette huile convient surtout aux peaux sèches et matures.",
                image: "image/c.jpg"
            },
            {
                id: 3,
                name: "Beurre Royal",
                price: 4900,
                category: "cosmetiques",
                description: "Grâce à sa composition ultra riche, le beurre royal est une merveille pour le corps, le visage, les cheveux et les ongles.",
                image: "image/.jpg"
            },
            {
                id: 4,
                name: "Anti-moustiques",
                price: 3700,
                category: "cosmetiques",
                description: "Produit à appliquer sur la peau, à la fois répulsif et apaisant. Caractérisé par son pouvoir répulsif grâce à ses actifs naturels.",
                image: "image/f.jpg"
            },
            {
                id: 5,
                name: "Gel Douche Rafraichissant",
                price: 4900,
                category: "cosmetiques",
                description: "Nettoie et purifie le corps en procurant à la peau une fraîcheur glaciale grâce à l'huile essentielle de menthe poivrée.",
                image: "image/i.jpg"
            },
            {
                id: 6,
                name: "Lait de Douche Soft Sensation",
                price: 5200,
                category: "cosmetiques",
                description: "Aux propriétés apaisantes et hydratantes, enrichi en aloe vera, offre une expérience de douche agréable.",
                image: "image/k.jpg"
            },
            {
                id: 7,
                name: "Lait de Douche Fresh Sensation",
                price: 5200,
                category: "cosmetiques",
                description: "Offre une sensation de fraîcheur agréable sous la douche grâce à son parfum rafraîchissant de citron et de menthe.",
                image: "image/k.jpg"
            },
            {
                id: 8,
                name: "Gel Intime",
                price: 4300,
                category: "cosmetiques",
                description: "Spécialement conçu pour l'hygiène quotidienne des zones intimes grâce à sa formule sans tensioactifs, sans sulfates ni savon.",
                image: "image/i.jpg"
            },
            {
                id: 9,
                name: "Savon Argan",
                price: 2300,
                category: "cosmetiques",
                description: "Contient de l'huile d'argan, ce qui le rend parfaitement adapté à la peau sèche. Idéal pour un usage quotidien.",
                image: "image/m.jpg"
            },
            {
                id: 10,
                name: "Savon Aloe Vera",
                price: 2300,
                category: "cosmetiques",
                description: "Conçu pour le nettoyage quotidien du visage et du corps. Convient parfaitement aux peaux grasses.",
                image: "image/n.jpg"
            },
            {
                id: 11,
                name: "So Perfect Foundation",
                price: 8600,
                category: "maquillage",
                description: "Fond de teint liquide qui offre une application facile et une haute couvrance pour un teint unifié et magnifique.",
                image: "image/o.jpg"
            },
            {
                id: 12,
                name: "Concealer",
                price: 6300,
                category: "maquillage",
                description: "Correcteur de teint à couvrance modulable qui permet de camoufler et masquer les imperfections.",
                image: "image/p.jpg"
            },
            {
                id: 13,
                name: "Mascara Ultra Volume",
                price: 7500,
                category: "maquillage",
                description: "Sublime le regard et les cils en un simple geste. Résultat: des cils plus volumineux, plus longs et parfaitement définis.",
                image: "image/45.jpg"
            },
            {
                id: 14,
                name: "Crayon Khôl",
                price: 4400,
                category: "maquillage",
                description: "Crayon khôl doux et crémeux pour le bord de l'œil. Un noir absolu pour un regard intense.",
                image: "images/products/crayon-khol.jpg"
            },
            {
                id: 15,
                name: "Eyeliner",
                price: 4400,
                category: "maquillage",
                description: "Intensément pigmentée et brillante, la texture de l'Eyeliner adhère parfaitement à la paupière.",
                image: "images/products/eyeliner.jpg"
            },
            {
                id: 16,
                name: "Crayon à Lèvres Delight",
                price: 5200,
                category: "maquillage",
                description: "Grâce à sa mine crémeuse et moelleuse et à son fini mat, permet une application ultra-fluide.",
                image: "images/products/crayon-levres.jpg"
            },
            {
                id: 17,
                name: "Lipgloss Mat",
                price: 5200,
                category: "maquillage",
                description: "Offre une couverture maximale et une couleur vive pour un aspect mat longue tenue.",
                image: "images/products/lipgloss-mat.jpg"
            },
            {
                id: 18,
                name: "Lipgloss Semi Mat",
                price: 5200,
                category: "maquillage",
                description: "Se distingue par un toucher velouté et une formule hydratante enrichie en huile d'avocat.",
                image: "images/products/lipgloss-semi-mat.jpg"
            },
            {
                id: 19,
                name: "Rouge à Lèvres So Glam",
                price: 6500,
                category: "maquillage",
                description: "Avec sa formule richement pigmentée et sa texture crémeuse, glisse sur les lèvres.",
                image: "images/products/rouge-levres.jpg"
            },
            {
                id: 20,
                name: "INSPIRATION - Eau de parfum",
                price: 12900,
                category: "parfums",
                description: "Ce parfum incarne l'élégance intemporelle et l'énergie conquérante d'une femme ambitieuse.",
                image: "images/parfums/inspiration.jpg"
            },
            {
                id: 21,
                name: "AUDACE - Eau de parfum",
                price: 12900,
                category: "parfums",
                description: "Ce parfum fougère aux facettes épicées et ambrées reflète l'allure affirmée d'un homme déterminé.",
                image: "images/parfums/audace.jpg"
            },
            {
                id: 22,
                name: "VELORIA - Eau de parfum",
                price: 12900,
                category: "parfums",
                description: "Notes fraîches de mandarine, cassis et poire en tête, cœur boisé de lavandin et santal.",
                image: "images/parfums/veloria.jpg"
            },
            {
                id: 23,
                name: "ALDAN - Eau de parfum",
                price: 12900,
                category: "parfums",
                description: "Ce parfum boisé et épicé incarne la force, la confiance et le raffinement.",
                image: "images/parfums/aldan.jpg"
            },
            {
                id: 24,
                name: "ALURA - Eau de parfum",
                price: 12900,
                category: "parfums",
                description: "Une explosion d'agrumes en tête avec la bergamote, le citron et l'orange.",
                image: "images/parfums/alura.jpg"
            },
            {
                id: 25,
                name: "VULKANIS - Eau de parfum",
                price: 12900,
                category: "parfums",
                description: "Avec ses notes aromatiques, fruitées et ambrées, révèle une personnalité magnétique.",
                image: "images/parfums/vulkanis.jpg"
            },
            {
                id: 26,
                name: "Spiruline",
                price: 10500,
                category: "complements",
                description: "Complément alimentaire pour une meilleure vitalité. Constituée principalement de 50 à 70% de protéines.",
                image: "images/complements/spiruline.jpg"
            },
            {
                id: 27,
                name: "Tri Maca",
                price: 15400,
                category: "complements",
                description: "Ce complément alimentaire aux propriétés revigorantes associe 3 variétés de Maca.",
                image: "images/complements/tri-maca.jpg"
            },
            {
                id: 28,
                name: "Coupe Faim",
                price: 4000,
                category: "complements",
                description: "Complément alimentaire idéal pour maintenir son poids dans le cadre d'un régime minceur.",
                image: "images/complements/coupe-faim.jpg"
            },
            {
                id: 29,
                name: "Slimy 3",
                price: 11500,
                category: "complements",
                description: "Complément alimentaire idéal pour perdre du poids dans le cadre d'un programme minceur.",
                image: "images/complements/slimy3.jpg"
            },
            {
                id: 30,
                name: "Sleep & Zen",
                price: 6500,
                category: "complements",
                description: "Complément alimentaire pour améliorer la qualité du sommeil et gérer le stress.",
                image: "images/complements/sleep-zen.jpg"
            }
        ];

        // Éléments DOM
        const productsGrid = document.querySelector('.products-grid');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const cartBtn = document.querySelector('.cart-btn');
        const cartSidebar = document.querySelector('.cart-sidebar');
        const closeCartBtn = document.querySelector('.close-cart');
        const cartItems = document.querySelector('.cart-items');
        const cartCount = document.querySelector('.cart-count');
        const totalPrice = document.querySelector('.total-price');
        const checkoutBtn = document.querySelector('.checkout-btn');
        const overlay = document.querySelector('.overlay');
        const checkoutModal = document.querySelector('.checkout-modal');
        const closeCheckoutBtn = document.querySelector('.close-checkout');
        const paymentMethods = document.querySelectorAll('.payment-method');
        const checkoutForm = document.querySelector('.checkout-form');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const nav = document.querySelector('nav');

        // Panier
        let cart = [];

        // Afficher les produits
        function displayProducts(filter = 'all') {
            productsGrid.innerHTML = '';
            
            const filteredProducts = filter === 'all' 
                ? products 
                : products.filter(product => product.category === filter);
            
            filteredProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-img">
                        <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
                    </div>
                    <div class="product-content">
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-price">${product.price.toLocaleString()} CFA</div>
                        <p class="product-description">${product.description}</p>
                        <div class="product-actions">
                            <button class="btn add-to-cart" data-id="${product.id}">Ajouter au panier</button>
                        </div>
                    </div>
                `;
                productsGrid.appendChild(productCard);
            });
            
            // Ajouter les écouteurs d'événements pour les boutons "Ajouter au panier"
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', addToCart);
            });
        }

        // Ajouter au panier
        function addToCart(e) {
            const productId = parseInt(e.target.dataset.id);
            const product = products.find(p => p.id === productId);
            
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...product,
                    quantity: 1
                });
            }
            
            updateCart();
            showNotification(`${product.name} ajouté au panier`);
        }

        // Mettre à jour le panier
        function updateCart() {
            cartItems.innerHTML = '';
            let total = 0;
            let count = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                count += item.quantity;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.jpg'">
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">${item.price.toLocaleString()} CFA</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                            <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                            <button class="quantity-btn increase" data-id="${item.id}">+</button>
                            <button class="remove-item" data-id="${item.id}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
                cartItems.appendChild(cartItem);
            });
            
            cartCount.textContent = count;
            totalPrice.textContent = `${total.toLocaleString()} CFA`;
            
            // Ajouter les écouteurs d'événements pour les boutons de quantité
            document.querySelectorAll('.decrease').forEach(button => {
                button.addEventListener('click', decreaseQuantity);
            });
            
            document.querySelectorAll('.increase').forEach(button => {
                button.addEventListener('click', increaseQuantity);
            });
            
            document.querySelectorAll('.quantity-input').forEach(input => {
                input.addEventListener('change', changeQuantity);
            });
            
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', removeItem);
            });
        }

        // Diminuer la quantité
        function decreaseQuantity(e) {
            const productId = parseInt(e.target.dataset.id);
            const item = cart.find(item => item.id === productId);
            
            if (item.quantity > 1) {
                item.quantity -= 1;
                updateCart();
            }
        }

        // Augmenter la quantité
        function increaseQuantity(e) {
            const productId = parseInt(e.target.dataset.id);
            const item = cart.find(item => item.id === productId);
            
            item.quantity += 1;
            updateCart();
        }

        // Changer la quantité via l'input
        function changeQuantity(e) {
            const productId = parseInt(e.target.dataset.id);
            const item = cart.find(item => item.id === productId);
            const newQuantity = parseInt(e.target.value);
            
            if (newQuantity > 0) {
                item.quantity = newQuantity;
                updateCart();
            } else {
                e.target.value = item.quantity;
            }
        }

        // Supprimer un article
        function removeItem(e) {
            const productId = parseInt(e.currentTarget.dataset.id);
            cart = cart.filter(item => item.id !== productId);
            updateCart();
        }

        // Afficher une notification
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background-color: var(--primary-color);
                color: white;
                padding: 15px 20px;
                border-radius: 4px;
                box-shadow: var(--shadow);
                z-index: 2000;
                transition: var(--transition);
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }

        // Filtrer les produits
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                displayProducts(btn.dataset.filter);
            });
        });

        // Ouvrir/fermer le panier
        cartBtn.addEventListener('click', () => {
            cartSidebar.classList.add('active');
            overlay.classList.add('active');
        });

        closeCartBtn.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Ouvrir/fermer le modal de paiement
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showNotification('Votre panier est vide');
                return;
            }
            
            checkoutModal.classList.add('active');
            cartSidebar.classList.remove('active');
        });

        closeCheckoutBtn.addEventListener('click', () => {
            checkoutModal.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Gérer les méthodes de paiement
        paymentMethods.forEach(method => {
            method.addEventListener('click', () => {
                paymentMethods.forEach(m => m.classList.remove('active'));
                method.classList.add('active');
            });
        });

        // Soumettre le formulaire de paiement
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulation de traitement de paiement
            showNotification('Paiement en cours...');
            
            setTimeout(() => {
                checkoutModal.classList.remove('active');
                overlay.classList.remove('active');
                cart = [];
                updateCart();
                showNotification('Paiement réussi! Votre commande est confirmée.');
            }, 2000);
        });

        // Menu mobile
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

        // Fermer le panier et le modal en cliquant sur l'overlay
        overlay.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            checkoutModal.classList.remove('active');
            overlay.classList.remove('active');
            nav.classList.remove('active');
        });

        // Initialisation
        displayProducts();