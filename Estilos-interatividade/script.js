document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('applicationForm');
    const slotsCountElement = document.getElementById('slots-count');
    
    // Simulação da contagem de vagas
    let availableSlots = 3; 

    // Função para atualizar a contagem de vagas no HTML
    function updateSlotsDisplay() {
        slotsCountElement.textContent = availableSlots;
        if (availableSlots <= 0) {
            slotsCountElement.textContent = '0';
            const scarcityBoxText = document.querySelector('.scarcity-text');
            scarcityBoxText.innerHTML = '🛑 **VAGAS ESGOTADAS!** Entre na lista de espera.';
            const ctaButton = document.querySelector('.cta-button-link .cta-button');
            if (ctaButton) {
                ctaButton.disabled = true;
                ctaButton.textContent = 'PROGRAMA COMPLETO';
                ctaButton.style.backgroundColor = '#666'; // Cor de botão desativado
                ctaButton.style.boxShadow = 'none';
            }
        }
    }

    updateSlotsDisplay(); // Atualiza a contagem inicial

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o recarregamento da página

        // Verifica se há vagas disponíveis antes de processar
        if (availableSlots <= 0) {
            alert('Desculpe, todas as vagas para este ciclo estão preenchidas. Por favor, entre em contato para a lista de espera.');
            return; // Impede o envio do formulário se não houver vagas
        }

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const objetivo = document.getElementById('objetivo').value;

        // Validação básica dos campos
        if (!nome || !email || !telefone || !objetivo) {
            alert('Por favor, preencha todos os campos do formulário de aplicação.');
            return;
        }

        // Simula o envio dos dados
        console.log('Aplicação Recebida:', { nome, email, telefone, objetivo });

        // Diminui a contagem de vagas
        availableSlots--;
        updateSlotsDisplay(); // Atualiza o display das vagas

        // Feedback ao usuário
        alert('✅ Aplicação Enviada com Sucesso! Um especialista da Elite Performance entrará em contato com você em até 24h via WhatsApp para agendar sua consultoria estratégica gratuita.');

        form.reset(); // Limpa o formulário
    });
});