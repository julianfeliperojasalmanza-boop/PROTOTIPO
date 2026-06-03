document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const registerContainer = document.getElementById('register-container');
    const loginContainer = document.getElementById('login-container');
    const profileContainer = document.getElementById('profile-container');
    const homeContainer = document.getElementById('home-container');
    const searchResultsContainer = document.getElementById('search-results-container');
    const detailsContainer = document.getElementById('details-container');
    const parkingContainer = document.getElementById('parking-container');
    const paymentContainer = document.getElementById('payment-container');
    const tripLogContainer = document.getElementById('trip-log-container');
    const mainHeader = document.querySelector('.header');
    
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        // Simular registro exitoso
        console.log(`Registro exitoso para: ${name} (${email})`);
        
        // Simple visual feedback
        const btn = registerForm.querySelector('.btn-primary');
        const originalText = btn.textContent;
        
        btn.textContent = '¡Registrado!';
        btn.style.backgroundColor = '#34A853'; // Success green temporarily
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.backgroundColor = ''; // Revert to CSS default
            registerForm.reset();
            
            // Transición a la pantalla de inicio de sesión
            registerContainer.style.display = 'none';
            loginContainer.style.display = 'block';
            
            // Pre-llenar el correo para mayor comodidad en el MVP
            document.getElementById('login-email').value = email;
        }, 1000);
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        console.log(`Inicio de sesión exitoso para: ${email}`);
        
        const btn = loginForm.querySelector('.btn-primary');
        const originalText = btn.textContent;
        
        btn.textContent = '¡Bienvenido!';
        btn.style.backgroundColor = '#34A853';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.backgroundColor = '';
            loginForm.reset();
            
            // Transition to Profile setup screen
            loginContainer.style.display = 'none';
            profileContainer.style.display = 'block';
        }, 1000);
    });

    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Perfil guardado exitosamente.');
            
            const btn = profileForm.querySelector('.btn-primary');
            const originalText = btn.textContent;
            
            btn.textContent = '¡Todo listo!';
            btn.style.backgroundColor = '#34A853';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                
                // Transition to Home screen
                profileContainer.style.display = 'none';
                mainHeader.style.display = 'none'; // Hide top logo
                homeContainer.style.display = 'block';
            }, 1000);
        });
    }

    // Añadir efecto de clic a los botones sociales
    const socialBtns = document.querySelectorAll('.btn-social');
    socialBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const isGoogle = btn.classList.contains('google');
            console.log(`Iniciando sesión con ${isGoogle ? 'Google' : 'Apple'}...`);
            
            // Simular animación/carga
            btn.style.opacity = '0.7';
            setTimeout(() => btn.style.opacity = '1', 500);
        });
    });

    const homeSearchBar = document.getElementById('home-search-bar');
    if (homeSearchBar) {
        homeSearchBar.addEventListener('click', () => {
            homeContainer.style.display = 'none';
            searchResultsContainer.style.display = 'block';
        });
    }

    const btnVerMasCartagena = document.getElementById('btn-ver-mas-cartagena');
    if (btnVerMasCartagena) {
        btnVerMasCartagena.addEventListener('click', () => {
            searchResultsContainer.style.display = 'none';
            detailsContainer.style.display = 'block';
        });
    }

    // Lógica visual para los botones de transporte
    const transportBtns = document.querySelectorAll('.transport-btn');
    transportBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            transportBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    const btnPropioMedio = document.getElementById('btn-propio-medio');
    if (btnPropioMedio) {
        btnPropioMedio.addEventListener('click', () => {
            detailsContainer.style.display = 'none';
            parkingContainer.style.display = 'block';
        });
    }

    const btnRegresarParking = document.getElementById('btn-regresar-parking');
    if (btnRegresarParking) {
        btnRegresarParking.addEventListener('click', () => {
            parkingContainer.style.display = 'none';
            detailsContainer.style.display = 'block';
        });
    }

    const flightsContainer = document.getElementById('flights-container');
    const btnVuelos = document.getElementById('btn-vuelos');
    if (btnVuelos && flightsContainer) {
        btnVuelos.addEventListener('click', () => {
            detailsContainer.style.display = 'none';
            flightsContainer.style.display = 'block';
        });
    }

    const btnRegresarVuelos = document.getElementById('btn-regresar-vuelos');
    if (btnRegresarVuelos && flightsContainer) {
        btnRegresarVuelos.addEventListener('click', () => {
            flightsContainer.style.display = 'none';
            detailsContainer.style.display = 'block';
        });
    }

    // Navegación a pantalla de confirmación de pago y gastos
    const btnAceptarDetalles = document.getElementById('btn-aceptar-detalles');
    if (btnAceptarDetalles && paymentContainer) {
        btnAceptarDetalles.addEventListener('click', () => {
            detailsContainer.style.display = 'none';
            paymentContainer.style.display = 'block';
        });
    }

    // Selección de forma de pago interactiva
    const paymentMethodCards = document.querySelectorAll('.payment-method-card');
    paymentMethodCards.forEach(card => {
        card.addEventListener('click', () => {
            // Desmarcar todos y quitar clase active
            paymentMethodCards.forEach(c => {
                c.classList.remove('active');
                const radio = c.querySelector('input[type="radio"]');
                if (radio) radio.checked = false;
            });
            // Marcar actual
            card.classList.add('active');
            const currentRadio = card.querySelector('input[type="radio"]');
            if (currentRadio) currentRadio.checked = true;
        });
    });

    // Confirmación de pago con animación sutil y transición a la pantalla de seguimiento de viaje
    const btnConfirmarPago = document.getElementById('btn-confirmar-pago');
    if (btnConfirmarPago) {
        btnConfirmarPago.addEventListener('click', () => {
            console.log('Confirmando pago...');
            const originalHTML = btnConfirmarPago.innerHTML;
            
            // Simular carga sutil
            btnConfirmarPago.style.backgroundColor = '#d11a2a';
            btnConfirmarPago.style.opacity = '0.8';
            btnConfirmarPago.innerHTML = `
                <span>Procesando pago...</span>
                <span class="spinner" style="display: inline-block; width: 16px; height: 16px; border: 2px solid #fff; border-top-color: transparent; border-radius: 50%; animation: spin 1s linear infinite; margin-left: 8px; vertical-align: middle;"></span>
            `;

            // Agregar animación de spinner si no existe
            if (!document.getElementById('spin-keyframes')) {
                const style = document.createElement('style');
                style.id = 'spin-keyframes';
                style.innerHTML = '@keyframes spin { to { transform: rotate(360deg); } }';
                document.head.appendChild(style);
            }

            setTimeout(() => {
                // Confirmado exitosamente
                btnConfirmarPago.style.backgroundColor = '#34A853';
                btnConfirmarPago.style.opacity = '1';
                btnConfirmarPago.style.boxShadow = '0 8px 16px rgba(52, 168, 83, 0.25)';
                btnConfirmarPago.innerHTML = `
                    <span>¡Pago Confirmado!</span>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                `;

                // Actualizar la forma de pago en la bitácora según lo seleccionado
                const selectedPaymentRadio = document.querySelector('input[name="payment_method"]:checked');
                const logPaymentDesc = document.getElementById('log-payment-method-desc');
                if (selectedPaymentRadio && logPaymentDesc) {
                    const methodLabel = document.querySelector(`label[for="${selectedPaymentRadio.id}"]`);
                    if (methodLabel) {
                        logPaymentDesc.textContent = methodLabel.textContent.trim();
                    }
                }

                setTimeout(() => {
                    // Restaurar botón
                    btnConfirmarPago.style.backgroundColor = '';
                    btnConfirmarPago.style.boxShadow = '';
                    btnConfirmarPago.style.opacity = '';
                    btnConfirmarPago.innerHTML = originalHTML;

                    // Cambiar de pantalla
                    paymentContainer.style.display = 'none';
                    if (tripLogContainer) {
                        tripLogContainer.style.display = 'block';
                    }
                }, 1000);
            }, 1200);
        });
    }

    // Interactividad de Recordatorios (Tachar al completar)
    const reminderItems = document.querySelectorAll('.reminder-item');
    reminderItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const label = item.querySelector('label');
        
        // Al hacer clic en la tarjeta de recordatorio
        item.addEventListener('click', (e) => {
            // Evitar duplicar el cambio si hicieron clic directamente en el checkbox o en la etiqueta
            if (e.target !== checkbox && e.target !== label) {
                checkbox.checked = !checkbox.checked;
                checkbox.dispatchEvent(new Event('change'));
            }
        });

        // Al cambiar el checkbox
        if (checkbox) {
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    item.classList.add('completed');
                } else {
                    item.classList.remove('completed');
                }
            });
        }
    });
});
