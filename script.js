        import {products,productsGrid,filterBtns,cartBtn,cartSidebar,closeCartBtn,cartItems,cartCount,totalPrice,checkoutBtn,overlay, checkoutModal, closeCheckoutBtn,paymentMethods,checkoutForm,mobileMenuBtn,nav} from "./produit.js";
        
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