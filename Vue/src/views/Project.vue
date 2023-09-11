<template>
    <section class="projects-intro">
        <div class="projects-intro__content">
            <div class="projects-intro__title-content">
                <h2 class="projects-intro__heading">Our Project</h2>
                <ul class="projects-intro__breadcrumbs">
                    <li class="projects-intro__breadcrumbs-item">
                        <router-link to="/" class="projects-intro__breadcrumbs-link">Home</router-link>
                    </li>
                    <li class="projects-intro__breadcrumbs-item">
                        <a href="#" class="projects-intro__breadcrumbs-link">Project</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <div class="projects center">
        <div class="projects__content">
            <!-- categories -->
            <div class="categories">
                <div class="categories__content">
                    <button v-for="button in listOfButtons" :key="button.id" @click="changeProjectCategory(button.id)"
                        type="button"
                        :class="['categories__btn', button.id === buttonIsActive ? 'categories__btn_active' : false]"> {{
                            button.title }}</button>
                </div>
            </div>
            <!-- projects -->
            <div class="projects__items">
                <div v-for="project in currentCategoryList" :key="project.id" class="projects__item">
                    <div class="star-box">
                        <svg @click="changeStarColor" class="star" :id="project.id" width="36" height="35"
                            viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_993_156)">
                                <path
                                    d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_d_993_156" x="0.186424" y="0.431396" width="35.6271" height="34.3619"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_993_156" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_993_156"
                                        result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <img class="projects__item-image" :src="project.src" :alt="project.alt">
                    <div class="projects__item-content">
                        <div class="projects__item-box">
                            <p class="projects__item-title">{{ project.firstparagraph }}</p>
                            <p class="projects__item-subtitle">{{ project.secondparagraph }}</p>
                        </div>
                        <a href="#" class="projects__item-button">
                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.27101 14.9525L7.21387 8.26683L1.27101 1.58112" stroke="#292F36" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
            <Pagination :maxVisibleButtons="maxVisibleButtons"
                :totalNumberPaginationPages="totalNumberPaginationPages" :currentPage="currentPage"/>
        </div>
    </div>
</template>

<script>
import Pagination from '../components/Pagination.vue';

export default {
    name: 'Project',

    components: {
        Pagination
    },

    data() {
        return {
            maxVisibleButtons: 3,
            totalNumberPaginationPages: 6,
            currentPage: 1,

            currentCategoryList: [
                {
                    id: '17', src: require('@/assets/images/projects_kitchen1.png'), alt: 'kitchen one', firstparagraph: 'Modern Kitchen', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '18', src: require('@/assets/images/projects_kitchen2.png'), alt: 'kitchen two', firstparagraph: 'Modern Kitchen', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '19', src: require('@/assets/images/projects_kitchen3.png'), alt: 'kitchen three', firstparagraph: 'Modern Kitchen', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '20', src: require('@/assets/images/projects_kitchen4.png'), alt: 'kitchen four', firstparagraph: 'Modern Kitchen', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '21', src: require('@/assets/images/projects_kitchen5.png'), alt: 'kitchen five', firstparagraph: 'Modern Kitchen', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '22', src: require('@/assets/images/projects_kitchen6.png'), alt: 'kitchen six', firstparagraph: 'Modern Kitchen', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '23', src: require('@/assets/images/projects_kitchen7.png'), alt: 'kitchen seven', firstparagraph: 'Modern Kitchen', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '24', src: require('@/assets/images/projects_kitchen8.png'), alt: 'kitchen eight', firstparagraph: 'Modern Kitchen', secondparagraph: 'Decor / Artchitecture'
                }
            ],
            allCategoriesList: [
                {
                    id: '1', src: require('@/assets/images/projects_img1.png'), alt: 'bedroom one', firstparagraph: 'Minimal Bedroom', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '2', src: require('@/assets/images/projects_img2.png'), alt: 'bedroom two', firstparagraph: 'Classic Minimal Bedroom', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '3', src: require('@/assets/images/projects_img3.png'), alt: 'bedroom three', firstparagraph: 'Minimal Bedroom Table', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '4', src: require('@/assets/images/projects_img4.png'), alt: 'bedroom four', firstparagraph: 'Modern Bedroom', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '5', src: require('@/assets/images/projects_img5.png'), alt: 'bedroom five', firstparagraph: 'Minimal Bedroom', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '6', src: require('@/assets/images/projects_img6.png'), alt: 'bedroom six', firstparagraph: 'Modern Bedroom', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '7', src: require('@/assets/images/projects_img7.png'), alt: 'bedroom seven', firstparagraph: 'System Bedroom Table', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '8', src: require('@/assets/images/projects_img8.png'), alt: 'bedroom eight', firstparagraph: 'Modern Bedroom', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '9', src: require('@/assets/images/projects_bathroom1.png'), alt: 'bathroom one', firstparagraph: 'Modern Bathroom', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '10', src: require('@/assets/images/projects_bathroom2.png'), alt: 'bathroom two', firstparagraph: 'Modern Bathroom', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '11', src: require('@/assets/images/projects_bathroom3.png'), alt: 'bathroom three', firstparagraph: 'Modern Bathroom', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '12', src: require('@/assets/images/projects_bathroom4.png'), alt: 'bathroom four', firstparagraph: 'Modern Bathroom', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '13', src: require('@/assets/images/projects_bathroom5.png'), alt: 'bathroom five', firstparagraph: 'Modern Bathroom', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '14', src: require('@/assets/images/projects_bathroom6.png'), alt: 'bathroom six', firstparagraph: 'Modern Bathroom', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '15', src: require('@/assets/images/projects_bathroom7.png'), alt: 'bathroom seven', firstparagraph: 'Modern Bathroom', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '16', src: require('@/assets/images/projects_bathroom8.png'), alt: 'bathroom eight', firstparagraph: 'Modern Bathroom', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '17', src: require('@/assets/images/projects_kitchen1.png'), alt: 'kitchen one', firstparagraph: 'Modern Kitchen', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '18', src: require('@/assets/images/projects_kitchen2.png'), alt: 'kitchen two', firstparagraph: 'Modern Kitchen', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '19', src: require('@/assets/images/projects_kitchen3.png'), alt: 'kitchen three', firstparagraph: 'Modern Kitchen', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '20', src: require('@/assets/images/projects_kitchen4.png'), alt: 'kitchen four', firstparagraph: 'Modern Kitchen', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '21', src: require('@/assets/images/projects_kitchen5.png'), alt: 'kitchen five', firstparagraph: 'Modern Kitchen', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '22', src: require('@/assets/images/projects_kitchen6.png'), alt: 'kitchen six', firstparagraph: 'Modern Kitchen', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '23', src: require('@/assets/images/projects_kitchen7.png'), alt: 'kitchen seven', firstparagraph: 'Modern Kitchen', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '24', src: require('@/assets/images/projects_kitchen8.png'), alt: 'kitchen eight', firstparagraph: 'Modern Kitchen', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '25', src: require('@/assets/images/projects_livingroom1.png'), alt: 'livingroom one', firstparagraph: 'Modern Livingroom', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '26', src: require('@/assets/images/projects_livingroom2.png'), alt: 'livingroom two', firstparagraph: 'Modern Livingroom', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '27', src: require('@/assets/images/projects_livingroom3.png'), alt: 'livingroom three', firstparagraph: 'Modern Livingroom 3', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '28', src: require('@/assets/images/projects_livingroom4.png'), alt: 'livingroom four', firstparagraph: 'Modern Livingroom', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '29', src: require('@/assets/images/projects_livingroom5.png'), alt: 'livingroom five', firstparagraph: 'Modern Livingroom', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '30', src: require('@/assets/images/projects_livingroom6.png'), alt: 'livingroom six', firstparagraph: 'Modern Livingroom', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '31', src: require('@/assets/images/projects_livingroom7.png'), alt: 'livingroom seven', firstparagraph: 'Modern Livingroom', secondparagraph: 'Decor / Artchitecture'
                },
                {
                    id: '32', src: require('@/assets/images/projects_livingroom8.png'), alt: 'livingroom eight', firstparagraph: 'Modern Livingroom', secondparagraph: 'Decor / Artchitecture'
                }
            ],
            listOfButtons: [
                {
                    id: 'bathroom', title: 'Bathroom'
                },
                {
                    id: 'bedroom', title: 'Bedroom'
                },
                {
                    id: 'kitchen', title: 'Kitchen'
                },
                {
                    id: 'livingroom', title: 'Living Area'
                }
            ],
            buttonIsActive: 'kitchen',
        };
    },
    methods: {
        changeProjectCategory(id) {
            const buttonId = id;
            this.currentCategoryList = [];
            this.allCategoriesList.forEach((category) => {
                if (category.firstparagraph.toLowerCase().includes(buttonId)) {
                    this.buttonIsActive = id;
                    return this.currentCategoryList.push(category);
                }
            });
        },
        changeStarColor(e) {
            const star = e.target.closest('.star');
            this.allCategoriesList.forEach((project) => {
                if (star.id === project.id) {
                    star.classList.toggle('star_active');
                }
            });
        },
    }
}

</script>

<style></style>