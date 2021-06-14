<template>
  <router-view :key="taskSelected.join('_') || 'default'" />
</template>
