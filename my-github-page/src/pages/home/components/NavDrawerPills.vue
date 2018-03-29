<template>
  <div :class="[isMobile?'show-toggle':'hidden-toggle','container']">
    <transition name="drawer-fade">
      <ul class="row" v-show="isShowNav">
        <li class="col-sm-3" v-for="(anchor,index) in anchorArray">
          <a :data-index="index" :href="anchor.href" :target="anchor.target" :class="{ active: index=== whichActiveAnchor}" @click="setActiveAnchor(index)">
            {{anchor.name}}
          </a>
        </li>
      </ul>
    </transition>
    <transition name="fade">
      <bs-modal v-show="isShowModal" /></bs-modal>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import BSModal from "@cc/bootstrap/Modal";
let anchorArray = [
  { name: "Portfolio", href: "#portfolio" },
  { name: "Blog", href: "#blog" },
  {
    name: "GitHub",
    href: "https://github.com/ShoneSingLone",
    target: "_blank"
  },
  { name: "E-mail", href: "mailto:SingLone@foxmail.com" }
];
export default {
  name: "NavDrawer",
  props: {
    isMobile: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  data() {
    return {
      anchorArray,
      whichActiveAnchor: 0
    };
  },
  components: {
    "bs-modal": BSModal
  },
  methods: {
    setActiveAnchor(index) {
      this.whichActiveAnchor = index;
    }
  },
  computed: {
    isShowNav() {
      if (!this.isMobile) return true;
      return this.$store.state.mainState.isShowModal;
    },
    isShowModal() {
      return this.$store.state.mainState.isShowModal && this.isMobile;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../../common/scss/bootstrap/common";
@import "../../../common/scss/my_variables";

$border-bottom-height: 0.4rem;
$border-radius: 1rem;

.show-toggle {
  .row {
    position: absolute;
    top: 0;
    right: 40%;
    left: 0;
    bottom: 0;
    background: linear-gradient(white, transparent),
      linear-gradient(225deg, $main-color, transparent),
      linear-gradient(180deg, rgb(6, 206, 156), transparent),
      linear-gradient(0deg, white, transparent);
    // background: linear-gradient(white, transparent),
    //   linear-gradient(225deg, rgb(6, 206, 156), transparent),
    //   linear-gradient(45deg, yellow, transparent);
    border-top-right-radius: 1rem 1rem;
    border-bottom-right-radius: 1rem 1rem;
    transform: translate3d(0.5rem, -0.5rem, 0);

    // box-shadow: 0.5rem 0.5rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5);
    @include box-shadow-up();
    z-index: $zindex-modal;
    padding: 2rem 1rem;

    overflow: hidden;

    &:hover {
      @include box-shadow-down();
    }

    > li {
      position: relative;
      display: block;

      > a {
        position: relative;
        border-radius: 1px;
        display: block;
        padding: $nav-link-padding;
        color: $main-color;
        text-decoration: none;
        border-radius: $border-radius $border-radius;

        &:hover,
        &:active,
        &.active {
          background-color: #9bbaa5;
          color: whitesmoke;
        }
        &:active,
        &.active {
          text-shadow: 0.1rem 0.1rem 0.1rem $main-color;
          @include box-shadow-up();
          background-color: darken(#9bbaa5, 10%);
          // border-bottom: $border-bottom-height solid $main-color;
        }
      }

      // Disabled state sets text to gray and nukes hover/tab effects
      &.disabled > a {
        color: $nav-disabled-link-color;

        &:hover,
        &:focus {
          color: $nav-disabled-link-hover-color;
          text-decoration: none;
          background-color: transparent;
          cursor: $cursor-disabled;
        }
      }
    }
  }

  .drawer-fade-enter-active,
  .drawer-fade-leave-active {
    transition: all 1s ease;
  }
  .drawer-fade-enter,
  .drawer-fade-leave-to {
    // opacity: 0;
    transform: translate(-150%, -25%);
  }
}

.hidden-toggle {
  &.container {
    margin: 0;
    padding: 0;
    @include box-shadow-up();
    background: linear-gradient(-45deg, white, transparent);
  }
  .row {
    width: 100%;
    padding: 0;
    position: relative;
    border-radius: 0.3rem 0.3rem;
    // padding: 0.1rem;
    margin: 0;

    > [class^="col-"] {
      position: relative;
      display: block;

      > a {
        text-align: center;
        font-weight: 600;
        position: relative;
        border-radius: 1px;
        display: block;
        padding: $nav-link-padding;
        color: $main-color;
        text-decoration: none;

        &:after {
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          width: 0;
          left: 50%;
          transition: 0.2s all linear;
        }

        &:hover,
        &.active,
        &:active {
          &:after {
            border-bottom: 0.3rem solid #9bbaa5;
            width: 100%;
            left: 0;
            @include box-shadow-up();
          }
          transition: 0.2s all linear;
        }

        &.active {
          color: whitesmoke;
          text-shadow: 0.1rem 0.1rem 0.1rem $main-color;
          background-color: #9bbaa5;
          @include box-shadow-up();
        }
      }
    }
  }
  .drawer-fade-enter-active,
  .drawer-fade-leave-active {
    transition: all 1s ease;
  }
  .drawer-fade-enter,
  .drawer-fade-leave-to {
    // opacity: 0;
    transform: translate(-150%, -25%);
  }
}
</style>