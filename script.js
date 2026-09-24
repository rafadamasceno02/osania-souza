/* ================================
   MOBILE MENU
================================ */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* Fecha o menu quando clicar em algum link */

const navLinks = nav.querySelectorAll("a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});



/* ================================
   FAQ
================================ */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const currentItem = question.parentElement;

        const isActive = currentItem.classList.contains("active");


        document.querySelectorAll(".faq-item").forEach(item => {

            item.classList.remove("active");

            const answer = item.querySelector(".faq-answer");

            answer.style.maxHeight = null;

        });


        if (!isActive) {

            currentItem.classList.add("active");

            const answer = currentItem.querySelector(".faq-answer");

            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});



/* ================================
   PROCEDURE MODAL
================================ */

const modal = document.getElementById("procedureModal");
const modalClose = document.getElementById("modalClose");
const modalOverlay = document.querySelector(".modal-overlay");

const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalWhatsapp = document.getElementById("modalWhatsapp");


const procedureData = {

    botox: {

        title: "Botox",

        body: `
            <p>
                O Botox é um procedimento utilizado para suavizar
                linhas de expressão e proporcionar uma aparência
                mais descansada.
            </p>

            <p>
                A indicação e a quantidade utilizada são definidas
                individualmente, de acordo com cada caso.
            </p>

            <ul>
                <li>Avaliação individualizada</li>
                <li>Aplicação personalizada</li>
                <li>Orientações após o procedimento</li>
            </ul>
        `,

        message:
            "Olá! Gostaria de saber mais sobre o Botox."
    },


    harmonizacao: {

        title: "Harmonização Facial",

        body: `
            <p>
                A harmonização facial busca valorizar a proporção
                e o equilíbrio dos traços, sempre respeitando
                as características individuais.
            </p>

            <p>
                Cada planejamento é personalizado de acordo com
                os objetivos e necessidades de cada pessoa.
            </p>

            <ul>
                <li>Avaliação individualizada</li>
                <li>Planejamento personalizado</li>
                <li>Foco na harmonia dos traços</li>
            </ul>
        `,

        message:
            "Olá! Gostaria de saber mais sobre a Harmonização Facial."
    },


    preenchimento: {

        title: "Preenchimento",

        body: `
            <p>
                O preenchimento pode ser utilizado para diferentes
                objetivos estéticos, sempre de acordo com a avaliação
                individual de cada pessoa.
            </p>

            <p>
                O procedimento, a quantidade e o investimento podem
                variar conforme cada caso.
            </p>

            <ul>
                <li>Avaliação individualizada</li>
                <li>Planejamento personalizado</li>
                <li>Valor a partir de R$ 790,00</li>
            </ul>
        `,

        message:
            "Olá! Gostaria de saber mais sobre o Preenchimento."
    }

};



const procedureButtons =
    document.querySelectorAll(".procedure-btn");


procedureButtons.forEach(button => {

    button.addEventListener("click", () => {

        const procedure =
            button.dataset.procedure;

        const data =
            procedureData[procedure];


        if (!data) {
            return;
        }


        modalTitle.textContent =
            data.title;

        modalBody.innerHTML =
            data.body;


        modalWhatsapp.href =
            "https://wa.me/5533999562042?text=" +
            encodeURIComponent(data.message);


        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});



/* ================================
   CLOSE MODAL
================================ */

function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


modalOverlay.addEventListener(
    "click",
    closeModal
);



/* ESC fecha o modal */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal();

    }

});