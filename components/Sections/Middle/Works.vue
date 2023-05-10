<template>
    <div class="text-dark py-10 px-2">
        <div>
            <h1 class="text-4xl font-light w-[12rem]">Featured Works</h1>
        </div>
        <div class="my-8 grid grid-cols-1 gap-4">
            <Cards src="/images/imOne.jpg" name="Project One" category="Hobby" type="Website" :order="1"></Cards>
            <Cards src="/images/imTwo.jpg" name="Project Two" category="Hobby" type="Website" :order="2"></Cards>
            <Cards src="/images/imThree.jpg" name="Project Three" category="Hobby" type="Application" :order="3"></Cards>
        </div>
    </div>
</template>