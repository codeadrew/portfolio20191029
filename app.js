new fullpage("#fullpage", {
    loopTop: true,
    loopBottom: true,
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination,direction) =>{
        const section = destination.item;
        const title = section.querySelector('h1');
        const tl = new TimelineMax({ delay: 0.5});
        tl.fromTo(title, 0.5, { y: '100', opacity: 0}, { y:'-100', opacity: 1 });

        if(destination.index === 1){
            const samjins = document.querySelectorAll('.samjin');
            const osans = document.querySelectorAll('.osan');
            const description = document.querySelector('.description');

            tl.fromTo(samjins, 0.7, {x: '100%'}, {x: '-35%'})
            .fromTo(description, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1})
            .fromTo(samjins[0], 1, {opacity: 1}, {opacity: 1})
            .fromTo(samjins[1], 1, {opacity: 0}, {opacity: 1})
            .fromTo(samjins[2], 1, {opacity: 0}, {opacity: 1})
            .fromTo(samjins[3], 1, {opacity: 0}, {opacity: 1})
            .fromTo(samjins[4], 1, {opacity: 0}, {opacity: 1})
            .fromTo(samjins[5], 1, {opacity: 0}, {opacity: 1});
            tl.fromTo(osans, 0.7, {x: '100%'}, {x: '-35%'})
            .fromTo(osans[0], 1, {opacity: 1}, {opacity: 1})
            .fromTo(osans[1], 1, {opacity: 0}, {opacity: 1})
            .fromTo(osans[2], 1, {opacity: 0}, {opacity: 1})
            .fromTo(osans[3], 1, {opacity: 0}, {opacity: 1})
            .fromTo(osans[4], 1, {opacity: 0}, {opacity: 1})
            .fromTo(osans[5], 1, {opacity: 0}, {opacity: 1});
        }
    }
});