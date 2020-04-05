(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

/* 
 * Next time I'll leave this dirty job for Node.
 */

module.exports = (function() {
    
  const assets = {}
  
  const imgs = 'assets/images/'
  const paths = {
    chars: imgs+'characters/',
    corridors: imgs+'corridors/',
    corridorFloor: imgs+'corridors/corridorHumans/floor.png',
    corridorRoof: imgs+'corridors/corridorHumans/roof.png',
    corridorWall: imgs+'corridors/corridorHumans/wall.png',
    corridorStatue: imgs+'corridors/corridorHumans/statue.png',
  }
  
  assets.cubemaps = {
    grass: {
      'top': { 
        src: 'assets/images/grass.png', imageRendering: 'pixelated' 
      },
      'sides' : { 
        src: 'assets/images/grass-side.png', imageRendering: 'pixelated' 
      }
    },
        
    crate: {
      'all': { 
        src: 'assets/images/crate.png', imageRendering: 'pixelated' 
      },
    }
  }
  
  assets.textures = {
    blueTag: {
      src: 'assets/images/blue-tag.png'
    },
    
    redTag: {
      src: 'assets/images/red-tag.png'
    },
    
    blueFlag: {
      src: 'assets/images/blue-flag.png'
    },
    
    redFlag: {
      src: 'assets/images/red-flag.png'
    },
    
    kills: {
      src: 'assets/images/kill.png'
    },
    
    corridor: {
      floor: {
        src: paths.corridorFloor,
        repeat: true,
        stretchX: 512, stretchY: 512
      },
      
      roof: {
        src: paths.corridorRoof,
        repeat: true,
        stretchX: 512, stretchY: 512
      },
      
      wall: {
        src: paths.corridorWall,
        repeat: true,
        stretchX: 512, stretchY: 512
      },
      
      statue: {
        src: paths.corridorStatue,
        cull: false
      }
    },
    /*
    corridorFloor: {
      src: 'assets/images/corridors/castle/floor.png',
      repeat: true, 
      stretchX: 512, stretchY: 512 
    },
    
    corridorRoof: {
      src: 'assets/images/corridors/castle/roof.png', 
      repeat: true, 
      stretchX: 512, stretchY: 512,
    },
    
    castleWall: {
      src: 'assets/images/corridors/castle/wall.png', 
      repeat: true, 
      stretchX: 512, stretchY: 512
    },
      
    statue: {
      src: 'assets/images/corridors/castle/statue.png',
      cull: false
    },*/
      
      
    /* Items and stuff */
    axe: { src: 'assets/images/axes/axe.png' },
      
      
    /* Characters */
    //human-guards-king
    guard1: { 
      src: paths.chars+'guard1.png'
    },
    
    guard2: { 
      src: paths.chars+'guard2.png'
    },
    
    king: {
      src: paths.chars+'king.png'
    },
    
   
    //barbarians
    barbarian1: { 
      src: paths.chars+'barbarian1.png'
    },

    barbarian2: { 
      src: paths.chars+'barbarian2.png'
    },
    
    barbarianKing: { 
      src: paths.chars+'barbarian-king.png'
    },
    
    
    //goblins 
    goblin1: { 
      src: paths.chars+'goblin1.png'
    },
    
    goblin2: { 
      src: paths.chars+'goblin2.png'
    },
    
    goblinKing: {
      src: paths.chars+'goblin-king.png'
    },
    
    
    //federals-president
    security1: { 
      src: paths.chars+'security1.png'
    },
    
    security2: { 
      src: paths.chars+'security2.png'
    },
    
    president: { 
      src: paths.chars+'president.png'
    },
    
    
    /* FX */
    arrow: { src: 'assets/images/fx/arrow.png' },
    impactMarker: { src: 'assets/images/fx/impact-marker.png' },
    shadowBlob: { src: 'assets/images/fx/shadow-blob.png' },
    hit1: { src: 'assets/images/fx/hit1.png' },
        
      
    fadeDown: {
      src: 'assets/images/fx/fade-down.png',
      stretchAll: true
    },
    
    fadeUp: {
      src: 'assets/images/fx/fade-down.png',
      flipX: true,
      stretchAll: true
    },
    
    lightRay: {
      src: 'assets/images/fx/light-ray.png',
      stretchAll: true
    },
    
    whitePixel: {
      src: 'assets/images/fx/white-pixel.png',
      stretchAll: true
    },
    
    
    // UI
    menuBackground: {
      src: 'assets/images/menu-background.png'
    },
    
    tutorial: {
      src: 'assets/images/tutorial.png'
    },
    
    config: {
      src: 'assets/images/config.png'
    },
    
    menuLogo: {
      src: 'assets/images/menu-logo-title.png'
    },
    
    btnSinglePlayer: {
      src: 'assets/images/menu-btn-single-player.png'
    },
    
    btnClose: {
      src: 'assets/images/btnClose.png'
    },
    
    btnMultiPlayer: {
      src: 'assets/images/menu-btn-multi-player.png'
    },
    
    btnQuestion: {
      src: 'assets/images/btnQuestion.png'
    },
    
    btnConfig: {
      src: 'assets/images/btnConfig.png'
    },

    vs: {
      src: 'assets/images/vs.png'
    },
    
    charFrame: {
      src: 'assets/images/charFrame.png'
    },
    
    charFrame2: {
      src: 'assets/images/charFrame2.png'
    },
    
    btnArrow: {
      src: 'assets/images/btnArrow.png'
    },
    
    btnForward: {
      src: 'assets/images/btnForward.png'
    },
    
    btnPlay: {
      src: 'assets/images/btnPlay.png'
    },

    btnBack: {
      src: 'assets/images/btnBack.png'
    },
    
    placeholderChar: {
      src: 'assets/images/placeholder-char.png'
    },
    
    corridorHumans: {
      src: 'assets/images/castle-humans.png'
    },
    
    corridorGoblins: {
      src: 'assets/images/castle-goblins.png'
    },
    
    corridorBarbarians: {
      src: 'assets/images/castle-barbarians.png'
    },
    
    corridorGovernment: {
      src: 'assets/images/castle-government.png'
    }
  };
    
  assets.loadCorridorTextures = (root) => {
    paths.corridorFloor = paths.corridors+root+'/'+'floor.png'
    paths.corridorRoof = paths.corridors+root+'/'+'roof.png'
    paths.corridorWall = paths.corridors+root+'/'+'wall.png'
    paths.corridorStatue = paths.corridors+root+'/'+'statue.png'
    
    assets.textures.corridor.floor.src = paths.corridorFloor
    assets.textures.corridor.roof.src = paths.corridorRoof
    assets.textures.corridor.wall.src = paths.corridorWall
    assets.textures.corridor.statue.src = paths.corridorStatue
  }
    
  assets.backgrounds = {
    castle: { src: 'assets/images/castle-background.png' }
  }
  
  return assets
}());


},{}],2:[function(require,module,exports){
'use strict';

/**
 * NOTE: There's no such thing as a camera in this engine yet, 
 * it is only the world that gets rotated and moved around.
 */

module.exports = (function(maths, world) {
    
    const camera = {
        perspective: 600
    };
    
    camera.element = document.getElementById('world');
    camera.transform = new maths.Transform();
    camera.transform.bindElement(camera.element);
    
    camera.element.style.willChange = 'transform';
    
    camera.setPosition = function(x, y, z) {
        camera.transform.position.set(x, y, z);
    };
    
    camera.setRotation = function(x, y, z) {
        camera.transform.rotation.set(x, y, z);
    };
    
    camera.applyRotation = function(x, y, z) {
        camera.transform.rotation.add(x, y, z);
    };
    
    camera.setScale = function(x, y, z) {
        camera.transform.scale.set(x, y, z);
    };
    
    camera.zoom = function(zoom) {
        camera.element.style.zoom = zoom;
    };
    
    camera.setPerspective = function(perspective, origin) {
        window.utopy.mainContainer.style.perspective = 
          perspective + 'px' || '1600px';

        window.utopy.mainContainer.style.perspectiveOrigin = 
          origin || 'center center';
    };
    
    camera.update = function() {
        camera.transform.lazyUpdate();
    };
    
    
    return camera;
    
}(
    window.utopy.maths
));

},{}],3:[function(require,module,exports){
'use strict';

const l = console.log

module.exports = (function(utopy, input, graphics, assets, world, objects, 
  camera, maths, shared) 
{
  const charselect = {};
  
  charselect.meshes = {
    vs: graphics.createFace(128, 128, assets.textures.vs),
    charFrame1: graphics.createFace(256, 256, assets.textures.charFrame),
    charSel1: graphics.createFace(96, 96, assets.textures.placeholderChar),
    charFrame2: graphics.createFace(256, 256, assets.textures.charFrame),
    charSel2: graphics.createFace(96, 96, assets.textures.placeholderChar),
    btnArrow: graphics.createFace(80, 80, assets.textures.btnArrow),
    btnForward: graphics.createFace(80, 80, assets.textures.btnForward),
    btnBack: graphics.createFace(80, 80, assets.textures.btnBack),
    background: graphics.createFace(128, 128, 
      assets.textures.menuBackground
    ),
    blueFlag: graphics.createFace(64, 64, assets.textures.blueFlag),
    redFlag: graphics.createFace(64, 64, assets.textures.redFlag)
  };
  
  let bg;
  let charOne, charTwo, selChar1, selChar2;
  let vs, charFrame1, charFrame2, 
    charFrame1Left, charFrame1Right,
    charFrame2Left, charFrame2Right;
  
  let btnPlay, btnBack;
  let blueFlag, redFlag;
  let c1,c2;
          
  charselect.init = function(init) {
    camera.setRotation(0, 0, 0);
    camera.setPosition(0, 0, 0);
    camera.zoom(1);
    
    graphics.setBackgroundColor('black');
    
    bg = new objects.GameObject({
      faces: charselect.meshes.background, 
      position: new maths.Vector3(), 
      scale: new maths.Vector3(6, 8, 0)
    })
    world.add(bg)
    
    vs = new objects.GameObject({
      faces: charselect.meshes.vs,
      position: new maths.Vector3(0, -40, 40)
    })
    
    world.add(vs)
    
    charFrame1 = new objects.GameObject({
      faces: charselect.meshes.charFrame1,
      position: new maths.Vector3(-115, -150, 1),
      rotation: new maths.Vector3(0, 0, -5)
    })
    
    charFrame1Left = new objects.GameObject({
      faces: charselect.meshes.btnArrow,
      position: new maths.Vector3(-230, -150, 10),
      rotation: new maths.Vector3(0, 0, 0),
      scale: new maths.Vector3(-1, 1, 1)
    })
    
    charFrame1Right = new objects.GameObject({
      faces: charselect.meshes.btnArrow,
      position: new maths.Vector3(10, -150, 10),
      rotation: new maths.Vector3(0, 0, 0)
    })
    
    charFrame2 = new objects.GameObject({
      faces: charselect.meshes.charFrame2,
      position: new maths.Vector3(115, 100, 1),
      rotation: new maths.Vector3(0, 0, 5)
    })
    
    charFrame2Left = new objects.GameObject({
      faces: charselect.meshes.btnArrow,
      position: new maths.Vector3(0, 100, 10),
      rotation: new maths.Vector3(0, 0, 0),
      scale: new maths.Vector3(-1, 1, 1)
    })
    
    charFrame2Right = new objects.GameObject({
      faces: charselect.meshes.btnArrow,
      position: new maths.Vector3(230, 100, 10),
      rotation: new maths.Vector3(0, 0, 0)
    });
    
    charFrame1Left.mesh.onclick = handleFrame1Left;
    charFrame1Right.mesh.onclick = handleFrame1Right;
    charFrame2Left.mesh.onclick = handleFrame2Left;
    charFrame2Right.mesh.onclick = handleFrame2Right;
    
    let buttonsLeft = [
      charFrame1Left,
      charFrame2Left
    ];
    
    btnPlay = new objects.GameObject({
      faces: charselect.meshes.btnForward,
      position: new maths.Vector3(185, 320, 10),
      scale: new maths.Vector3(1, 1, 1) 
    })
  
    btnPlay.mesh.onclick = (e) => {
      utopy.switchState('corridorselectionstate') 
    }
    
    btnBack = new objects.GameObject({
      faces: charselect.meshes.btnBack,
      position: new maths.Vector3(-190, 320, 10),
    });
    
    btnBack.mesh.onclick = (e) => {
      utopy.switchState('menustate') 
    }
    
    let buttonsRight = [
      charFrame1Right,
      charFrame2Right,
      btnPlay,
      btnBack
    ];
    
    for (let i = 0; i < buttonsLeft.length; i++) {
      buttonsLeft[i].mesh.onmouseenter = function() {
        buttonsLeft[i].scale.set(-1.3, 1.3, 1.3);
      };
      
      buttonsLeft[i].mesh.onmouseleave = function() {
        buttonsLeft[i].scale.set(-1, 1, 1);
      };
      
      buttonsLeft[i].mesh.onmousedown = function() {
        buttonsLeft[i].scale.set(-1, 1, 1);
      };
      
      buttonsLeft[i].mesh.onmouseup = function() {
        buttonsLeft[i].scale.set(-1.3, 1.3, 1.3);
      };
    }
    
    for (let i = 0; i < buttonsRight.length; i++) {
      buttonsRight[i].mesh.onmouseenter = function() {
        buttonsRight[i].scale.set(1.3, 1.3, 1.3);
      };
      
      buttonsRight[i].mesh.onmouseleave = function() {
        buttonsRight[i].scale.set(1, 1, 1);
      };
      
      buttonsRight[i].mesh.onmousedown = function() {
        buttonsRight[i].scale.set(1, 1, 1);
      };
      
      buttonsRight[i].mesh.onmouseup = function() {
        buttonsRight[i].scale.set(1.3, 1.3, 1.3);
      };
    }
    
    world.add(charFrame1);
    world.add(charFrame2);
    
    world.add(charFrame1Left);
    world.add(charFrame1Right);
    
    world.add(charFrame2Left);
    world.add(charFrame2Right);
  
    world.add(btnPlay)
    world.add(btnBack)
    
    selChar1 = new objects.GameObject({
      faces: charselect.meshes.charSel1,
      position: new maths.Vector3(-115, -150, 10),
      rotation: new maths.Vector3(0, 0, 0)
    });
    
    selChar2 = new objects.GameObject({
      faces: charselect.meshes.charSel2,
      position: new maths.Vector3(115, 100, 10),
      rotation: new maths.Vector3(0, 0, 0)
    });
    
    world.add(selChar1);
    world.add(selChar2);
    
    blueFlag = new objects.GameObject({
      faces: charselect.meshes.blueFlag,
      position: new maths.Vector3(170, 60, 2),
      rotation: new maths.Vector3(0, 0, 10)
    });
    
    redFlag = new objects.GameObject({
      faces: charselect.meshes.redFlag,
      position: new maths.Vector3(-170, -180, 2),
      scale: new maths.Vector3(-1, 1, 1),
      rotation: new maths.Vector3(0, 0, 15)
    });
    
    world.add(blueFlag)
    world.add(redFlag)
    
    graphics.setFaceTexture(
      selChar1.mesh.childNodes[0], assets.textures.guard1
    );
    graphics.setFaceTexture(
      selChar2.mesh.childNodes[0], assets.textures.guard2
    );
    
    c1=0;c2=1
  };
  
  let angle = 0.0;
  charselect.update = function(dt) {
    angle += dt;
    
    if (angle >= 360) angle -= 360;
    
    vs.position.y = -40 + (Math.sin(angle) * 10);
    vs.rotation.z = (vs.position.y+40) * Math.sin(angle) * 0.4;
    
    vs.update();
    
    charFrame1Left.update();
    charFrame1Right.update();
    charFrame2Left.update();
    charFrame2Right.update();
    btnPlay.update()
    btnBack.update()
  };
  
  let chars = [
    'guard1',
    'guard2',
    'king',
    'goblin1',
    'goblin2',
    'goblinKing',
    'barbarian1',
    'barbarian2',
    'barbarianKing',
    'security1',
    'security2',
    'president'
  ]
  
  
  function handleFrame1Left() {
    c1--;
    
    if (c1 === c2) c1--
    if (c1 < 0) c1 = 11
    if (c1 === c2) c1--
    
    graphics.setFaceTexture(
      selChar1.mesh.childNodes[0], assets.textures[chars[c1]]
    )
  }
  
  function handleFrame1Right() {
    c1++;
    
    if (c1 === c2) c1++
    if (c1 > 11) c1 = 0
    if (c1 === c2) c1++
    
    graphics.setFaceTexture(
      selChar1.mesh.childNodes[0], assets.textures[chars[c1]]);
  }
  
  function handleFrame2Left() {
    c2--;
    
    if (c2 === c1) c2--
    if (c2 < 0) c2 = 11
    if (c2 === c1) c2--
    
    graphics.setFaceTexture(
      selChar2.mesh.childNodes[0], assets.textures[chars[c2]]
    );
  }
  
  function handleFrame2Right() {
    c2++;
    
    if (c2 === c1) c2++
    if (c2 > 11) c2 = 0
    if (c2 === c1) c2++
    
    graphics.setFaceTexture(
      selChar2.mesh.childNodes[0], assets.textures[chars[c2]]
    );
  }
  
  charselect.finish = function() {
    world.destroy();
    shared.selectedChar1 = chars[c2]
    shared.selectedChar2 = chars[c1]
  };
  
  return charselect;
}(
  window.utopy, 
  window.utopy.input, 
  window.utopy.graphics,
  window.utopy.assets,
  window.utopy.world,
  window.utopy.objects,
  window.utopy.camera,
  window.utopy.maths,
  window.utopy.shared
));

},{}],4:[function(require,module,exports){
'use strict';

const l = console.log

module.exports = (function(utopy, input, graphics, assets, world, objects, camera, maths, shared, gui)
{
  const state = {};

  state.meshes = {
    charFrame1: graphics.createFace(300, 300, assets.textures.charFrame2),
    corridorSel: graphics.createFace(185, 185, assets.textures.corridorHumans),
    btnArrow: graphics.createFace(80, 80, assets.textures.btnArrow),
    btnPlay: graphics.createFace(256, 256, assets.textures.btnPlay),
    btnBack: graphics.createFace(80, 80, assets.textures.btnBack),
    background: graphics.createFace(128, 128, assets.textures.menuBackground)
  };

  let bg;
  let charFrame1, charFrame1Left, charFrame1Right;
  let killsLeft, killsRight;

  let btnPlay, btnBack, selChar1;
  let c1;
  
  let kills, labelKillCount, labelCorridorType;

  state.init = function(init) {
    kills = 3
    camera.setRotation(0, 0, 0);
    camera.setPosition(0, 0, 0);
    camera.zoom(1);

    bg = new objects.GameObject({
      faces: state.meshes.background,
      position: new maths.Vector3(),
      scale: new maths.Vector3(6, 8, 0)
    })
    world.add(bg)

    charFrame1 = new objects.GameObject({
      faces: state.meshes.charFrame1,
      position: new maths.Vector3(0, -140, 3),
      rotation: new maths.Vector3(0, 0, 0)
    });

    charFrame1Left = new objects.GameObject({
      faces: state.meshes.btnArrow,
      position: new maths.Vector3(-135, -140, 10),
      rotation: new maths.Vector3(0, 0, 0),
      scale: new maths.Vector3(-1, 1, 1)
    });

    charFrame1Right = new objects.GameObject({
      faces: state.meshes.btnArrow,
      position: new maths.Vector3(135, -140, 10),
      rotation: new maths.Vector3(0, 0, 0)
    });

    charFrame1Left.mesh.onclick = handleFrame1Left;
    charFrame1Right.mesh.onclick = handleFrame1Right;

    labelKillCount = gui.createLabel('Kills 3')
    labelKillCount.style.transform= 'translateX(200px) translateY(340px)'
    labelKillCount.style.top = '0%'
    labelKillCount.classList.add('text-score')
    
    labelCorridorType = gui.createLabel('Normal')
    labelCorridorType.style.transform = 'translateX(200px) translateY(90px) translateZ(100px)'
    labelCorridorType.style.top = '0%'
    labelCorridorType.classList.add('text-score')
    labelCorridorType.style.fontSize = '30px'

    killsLeft = new objects.GameObject({
      faces: state.meshes.btnArrow,
      position: new maths.Vector3(-120, 120, 10),
      rotation: new maths.Vector3(0, 0, 0),
      scale: new maths.Vector3(-1, 1, 1)
    });

    killsRight = new objects.GameObject({
      faces: state.meshes.btnArrow,
      position: new maths.Vector3(120, 120, 10),
      rotation: new maths.Vector3(0, 0, 0)
    });

    killsLeft.mesh.onclick = handleKillsLeft;
    killsRight.mesh.onclick = handleKillsRight;

    let buttonsLeft = [
      charFrame1Left,
      killsLeft
    ];

    btnPlay = new objects.GameObject({
      faces: state.meshes.btnPlay,
      position: new maths.Vector3(0, 320, 10),
      scale: new maths.Vector3(1, 1, 1)
    });

    btnPlay.mesh.onclick = (e) => {
      //shared.selectedGameMode = 'multi'
      utopy.switchState('playstate')
    }

    btnBack = new objects.GameObject({
      faces: state.meshes.btnBack,
      position: new maths.Vector3(-210, -345, 10),
    });

    btnBack.mesh.onclick = (e) => {
      utopy.switchState('charselectstate')
    }

    let buttonsRight = [
      charFrame1Right,
      btnPlay,
      btnBack,
      killsRight
    ];

    for (let i = 0; i < buttonsLeft.length; i++) {
      buttonsLeft[i].mesh.onmouseenter = function() {
        buttonsLeft[i].scale.set(-1.3, 1.3, 1.3)
      }

      buttonsLeft[i].mesh.onmouseleave = function() {
        buttonsLeft[i].scale.set(-1, 1, 1)
      }

      buttonsLeft[i].mesh.onmousedown = function() {
        buttonsLeft[i].scale.set(-1, 1, 1)
      }

      buttonsLeft[i].mesh.onmouseup = function() {
        buttonsLeft[i].scale.set(-1.3, 1.3, 1.3)
      }
    }

    for (let i = 0; i < buttonsRight.length; i++) {
      buttonsRight[i].mesh.onmouseenter = function() {
        buttonsRight[i].scale.set(1.3, 1.3, 1.3)
      }

      buttonsRight[i].mesh.onmouseleave = function() {
        buttonsRight[i].scale.set(1, 1, 1)
      }

      buttonsRight[i].mesh.onmousedown = function() {
        buttonsRight[i].scale.set(1, 1, 1)
      }

      buttonsRight[i].mesh.onmouseup = function() {
        buttonsRight[i].scale.set(1.3, 1.3, 1.3)
      }
    }

    world.add(charFrame1)

    world.add(charFrame1Left)
    world.add(charFrame1Right)

    world.add(btnPlay)
    world.add(btnBack)


    world.add(killsLeft)
    world.add(killsRight)

    selChar1 = new objects.GameObject({
      faces: state.meshes.corridorSel,
      position: new maths.Vector3(0, -140, 0),
      rotation: new maths.Vector3(0, 0, 0)
    })

    world.add(selChar1)

    graphics.setFaceTexture(selChar1.mesh.childNodes[0], assets.textures.corridorHumans)

    c1=0;
  };

  state.update = function(dt) {
    charFrame1Left.update();
    charFrame1Right.update();
    btnPlay.update()
    btnBack.update()
    killsRight.update()
    killsLeft.update()
  };

  let chars = [
    'corridorHumans',
    'corridorGoblins',
    'corridorBarbarians',
    'corridorGovernment'
  ]
  
  function checkCorridorType() {
    switch (chars[c1]) {
      case 'corridorHumans': {
        labelCorridorType.innerHTML = 'Normal'
      } break;
      case 'corridorGoblins': {
        labelCorridorType.innerHTML = 'Floaty'
      } break;
      case 'corridorBarbarians': {
        labelCorridorType.innerHTML = 'Heavy'
      } break;
      case 'corridorGovernment': {
        labelCorridorType.innerHTML = 'Windy'
      } break;
    }
  }

  function handleFrame1Left() {
    c1--;
    if (c1 < 0) c1 = 3
    checkCorridorType()
    graphics.setFaceTexture(selChar1.mesh.childNodes[0], assets.textures[chars[c1]])
  }

  function handleFrame1Right() {
    c1++;
    if (c1 > 3) c1 = 0
    checkCorridorType()
    graphics.setFaceTexture(selChar1.mesh.childNodes[0], assets.textures[chars[c1]]);
  }

  function handleKillsLeft() {
    if (kills > 2)
      kills--
    labelKillCount.innerHTML = 'Kills ' + kills
  }

  function handleKillsRight() {
    if (kills < 99)
      kills++
    labelKillCount.innerHTML = 'Kills ' + kills
  }

  state.finish = function() {
    shared.selectedCorridor = chars[c1]
    shared.gameScore = kills
    assets.loadCorridorTextures(chars[c1])
    world.destroy();
    gui.destroy()
  };

  return state;
}(
  window.utopy,
  window.utopy.input,
  window.utopy.graphics,
  window.utopy.assets,
  window.utopy.world,
  window.utopy.objects,
  window.utopy.camera,
  window.utopy.maths,
  window.utopy.shared,
  window.utopy.gui
));

},{}],5:[function(require,module,exports){
'use strict';

module.exports = (function(maths, utils, camera) {
  const graphics = {
    baseWidth: 320,
    baseHeight: 480,
    maxReajustWidth: 768,
    maxReajustHeight: 540,
    aspectRatio: 1.33,

    rendering: {
      imageRendering: ''
    }
  };

  graphics.setImageRendering = function(value) {
    graphics.rendering.imageRendering = value;
  };

  graphics.setBackgroundColor = function(color) {
    window.utopy.mainContainer.style.backgroundColor = color;
  };

  graphics.resize = function(event) {
    let width = window.utopy.mainContainer.clientWidth;
    let height = window.utopy.mainContainer.clientHeight;

    let newWidth, newHeight, ratio;

    if (width / height > height / width) {
      newHeight = height;
      newWidth = newHeight * width / height;
      newWidth = maths.clamp(newWidth, 0, graphics.maxReajustWidth);
      ratio = (newHeight / newWidth);
    } else {
      newWidth = width;
      newHeight = newWidth * height / width;
      newHeight = maths.clamp(newHeight, 0, graphics.maxReajustHeight);
      ratio = (newWidth / newHeight);
    }

    graphics.aspectRatio = ratio;

    /* EXPERIMENTAL */
    camera.setPerspective(camera.perspective * graphics.aspectRatio);

    camera.setScale(ratio, ratio, ratio);
  };

  graphics.resize();
  window.addEventListener('resize', graphics.resize);

  graphics.loadCubemap = function(cubemap, bottomLess) {
    let result = {};

    if (cubemap.all !== undefined) {
      result.front = cubemap.all.src;
      result.back = cubemap.all.src;

      result.right = cubemap.all.src;
      result.left = cubemap.all.src;

      result.top = cubemap.all.src;
      result.bottom = bottomLess? null : cubemap.all.src;

      return result;
    }

    if (cubemap.sides !== undefined) {
      result.front = cubemap.sides.src;
      result.back = cubemap.sides.src;

      result.right = cubemap.sides.src;
      result.left = cubemap.sides.src;

      result.top = cubemap.top.src;
      result.bottom = bottomLess? null : cubemap.bottom.src;

      return result;
    }

    result.front = cubemap.front.src;
    result.back = cubemap.back.src;

    result.right = cubemap.right.src;
    result.left = cubemap.left.src;

    result.top = cubemap.top.src;
    result.bottom = bottomLess? null : cubemap.bottom.src;

    return result;
  };

  graphics.setFaceTexture = function(face, texture) {
    if (texture) {
      if (typeof(texture)  === "string") {
        switch(texture[0]) {
          case ':': {
            face.style.backgroundColor = texture.slice(1);
          } break;

          case '>': {
            face.style.background = texture.slice(1);
          } break;
        }
      } else {
        if (!texture.stretchAll) {
          face.style.background = 'url(\'' + texture.src + '\') ' + 
            (texture.repeat ? 'repeat' : 'no-repeat')

          if (!texture.repeat) {
            face.style.backgroundSize = 'contain'
          } else {
            face.style.backgroundSize = 
              texture.stretchX + 'px ' + texture.stretchY + 'px'
          }

        } else {
          face.style.background = 
            'url(\'' + texture.src + '\')' + '0 0 / 100% 100%'
        }
      }
    }

    let shouldCull = texture.cull !== undefined? texture.cull : true;
    face.style.backfaceVisibility = shouldCull ? 'hidden' : 'visible';

    if (texture) {
      face.style.imageRendering = texture.imageRendering || 'unset';
    }
  };

  graphics.createFace = function(w, h, texture, x, y, z, rx, ry, rz, 
    skx, sky) 
  {
    let face = document.createElement('figure');
    face.faceId = '';
    face.style.willChange = 'transform';

    /* (HACK): With an extra pixel you can get rid of face->face seams */
    face.style.width = (w + 1 || 0) + 'px';
    face.style.height = (h + 1 || 0) + 'px';

    graphics.setFaceTexture(face, texture);

    face.style.transform = 
      maths.Transform.stringify(
        x, y, z, 
        rx, ry, rz, 
        1, 
        (texture && texture.flipX? -1 : 1), 1, skx, sky
      );

    return face;
  };

  graphics.createCubeFaces = function(sx, sy, sz, cubemap, flipBottom, bottomLess) {
    let mesh = [];

    let ssx = sx / 2;
    let ssy = sy / 2;
    let ssz = sz / 2;

    cubemap = cubemap || '';
    let loadedCubemap = 
      typeof(cubemap) == 'string'? cubemap : graphics.loadCubemap(cubemap);

    let front = 
      graphics.createFace(
        sx, sy,  
        loadedCubemap.front || loadedCubemap, 
        0, 0, ssz, 
        0, 0, 0
      );

    let back = 
      graphics.createFace(
        sx, sy,  
        loadedCubemap.back || loadedCubemap, 
        0, 0, -ssz, 
        0, 180, 0
      );

    let right = 
      graphics.createFace(
        sz, sy, 
        loadedCubemap.right || loadedCubemap, 
        -ssx, 0, 0, 
        0, -90, 0
      );

    let left = 
      graphics.createFace(
        sz, sy,  
        loadedCubemap.left || loadedCubemap, 
        ssx, 0, 0, 
        0, 90, 0
      );

    let top = 
      graphics.createFace(
        sx, sz,  
        loadedCubemap.top || loadedCubemap, 
        0, -ssy, 0, 
        90, 0, 0
      );

    let bottom;

    if (bottomLess === false || !bottomLess) {
      bottom = 
        graphics.createFace(
          sx, sz,  
          (loadedCubemap.bottom || loadedCubemap) || '', 
          0, ssy, 0, 
          flipBottom? 90 : -90, 0, 0
        );
    }

    front.faceId = 0;
    back.faceId = 1;
    right.faceId = 2;
    left.faceId = 3;
    top.faceId = 4;

    if (bottomLess === false || !bottomLess) {
      bottom.faceId = 5;
    }

    mesh.push(front);
    mesh.push(back);
    mesh.push(right);
    mesh.push(left);
    mesh.push(top);

    if (bottomLess === false || !bottomLess) {
      mesh.push(bottom);
    }

    return mesh;
  };

  graphics.createFadingTunnel = function(sx, sy, sz, x, y, z, texture) {
    let mesh = [];

    let ssx = sx / 2;
    let ssy = sy / 2;
    let ssz = sz / 2;

    let top = graphics.createFace(
      sx, sy,
      texture,
      x, y, z+ssz, 
      0, -180, 0
    );

    let bottom = graphics.createFace(
      sx, sy,
      texture,
      x, y, z-ssz, 
      180, 180, -180
    );

    let right = graphics.createFace(
      sz, sy,
      texture,
      x+ssx, y, z,
      0, -90, 0
    );

    let left = graphics.createFace(
      sz, sy,
      texture,
      x-ssx, y, z, 
      0, 90, 0
    );

    top.faceId = 2;
    bottom.faceId = 3;
    right.faceId = 0;
    left.faceId = 1;

    mesh.push(top);
    mesh.push(bottom);
    mesh.push(right);
    mesh.push(left);

    return mesh;
  };

  graphics.calculateFacesLighting = function(faceArray, r, g, b, 
    ambientDarkness) {
    let ambient = ambientDarkness || 1.022;
    for (let i = 0; i < faceArray.length; i++) {
      let face = faceArray[i];

      r /= ambient;
      g /= ambient;
      b /= ambient;

      face.style.backgroundColor = 
        'rgba(' + 
          r.toFixed(0) + ', ' +
          g.toFixed(0) + ', ' +
          b.toFixed(0) + ', 1)';
    }
  };

  HTMLElement.prototype.appendFaces = function(faceArray) {
    let i = faceArray.length;
    while(i--) {
      this.appendChild(faceArray[i].cloneNode());
    }
  };

  HTMLElement.prototype.getFace = function(faceId) {
    let i = this.childNodes.length;

    while(i--) {
      let current = this.childNodes[i];
      if (current.faceId === faceId) {
        return current;
      }
    }

    return null;
  };

  HTMLElement.prototype.setTint = function(color) {
    let i = this.childNodes.length;
    while(i--) {
      this.childNodes[i].style.backgroundColor = color;
    }
  };

  HTMLElement.prototype.calculateFakeLighting = function(ambientDarkness) {
    let ambient = ambientDarkness || 1.022;

    let sampleFaceColor = this.childNodes[0].style.backgroundColor;
    let baseColor;
    if (sampleFaceColor.startsWith('#')) {
      baseColor = utils.hexToRGB(sampleFaceColor);
    } else {
      baseColor = utils.cssColorToRGBA(sampleFaceColor);
    }

    for (let i = 0; i < this.childNodes.length; i++) {
      let face = this.childNodes[i];

      baseColor.r /= ambient;
      baseColor.g /= ambient;
      baseColor.b /= ambient;

      face.style.backgroundColor = 'rgba(' + baseColor.r.toFixed(0) + ', ' +
        baseColor.g.toFixed(0) + ', ' +
        baseColor.b.toFixed(0) + ', 1)';
    }
  };

  return graphics;

}(
  window.utopy.maths,
  window.utopy.utils,
  window.utopy.camera
));

},{}],6:[function(require,module,exports){
'use strict'

module.exports = (function(){
  const gui = {
    root: document.getElementById('gui')
  }
  
  gui.createButton = ( img, 
    { onmouseover, onmouseleave, onmousedown, onmouseup }) => 
  {
    let btn = document.createElement('img')
    
    btn.style.top = '0'
    btn.style.left = '0'
    
    btn.src = img
    
    btn.onmouseover = onmouseover
    btn.onmouseleave = onmouseleave
    btn.onmousedown = onmousedown
    btn.onmouseup = onmouseup
    
    gui.root.appendChild(btn)
    
    return btn
  } 
  
  gui.createLabel = (text) => {
    let label = document.createElement('div')
    label.innerHTML = text
    gui.root.appendChild(label)
    
    return label
  }
  
  gui.createImage = (src) => {
    let img = document.createElement('img')
    img.src = src
    gui.root.appendChild(img)
    return img
  }
  
  gui.removeElement = el => {
    if (el !== undefined)
      el.remove()
  }
  
  gui.destroy = () => {
    while (gui.root.childElementCount !== 0) {
      let el = gui.root.childNodes[0]
      
      if (el !== undefined)
        el.remove()
    }
  }
  
  return gui
}())

},{}],7:[function(require,module,exports){
'use strict';

module.exports = (function() {
    
    const input = {
        keysDown: [222], // Is this faster than using APS?
        lastKeyCode: -1,
        lastKeyHit: -1,
        lastKeyJustReleased: -1,
        
        keys: {
          a: 65,
          b: 66,
          c: 67,
          d: 68,
          e: 69,
          f: 70,
          g: 71,
          h: 72,
          i: 73,
          j: 74,
          k: 75,
          l: 76,
          m: 77,
          n: 78,
          o: 79,
          p: 80,
          q: 81,
          r: 82,
          s: 83,
          t: 84,
          u: 85,
          v: 86,
          w: 87,
          x: 88,
          y: 89,
          z: 90,
          
          space: 32,
          shift: 16,
          ctrl: 18,
        
          up: 38,
          down: 40,
          right: 39,
          left: 37,
          
          zero: 48,
          one: 49,
          two: 50,
          three: 51,
          four: 52,
          five: 53,
          six: 54,
          seven: 55,
          eight: 56,
          nine: 57
        },
        
        isTouching: false,
        hasTapped: false,
        hasReleasedTap: false,
        hasSwiped: false,
        
        lastSwipe: {
            fromX: 0,
            fromY: 0,
            toX: 0,
            toY: 0,
            dx: 0,
            dy: 0,
            length: 0
        },
        
        /* Used to interact with the mouse wheel */
        wheelDelta: 0
    };
    
    input.getKey = function(keyCode) {
        return input.keysDown[keyCode];
    };
    
    input.getKeyJustPressed = function(keyCode) {
      if (keyCode !== input.lastKeyCode && input.getKey(keyCode)) {
        input.keysDown[keyCode] = false;
        input.lastKeyCode = keyCode;
        return true;
      }
      
      return false;
    };
    
    input.getKeyJustReleased = function(keyCode) {
        return input.keyJustReleased === keyCode;
    };
    
    function onKeyDown(event) {
      let keyCode = event.keyCode;
      
      input.lastKeyHit = event.keyCode
      
      if (keyCode === 32) {
        if(event.preventDefault)
          event.preventDefault();
        else
          event.returnValue = false;
      }
      
      if (event.stopPropagation !== undefined)
        event.stopPropagation();
      
      input.keysDown[keyCode] = true;
    };
    
    function onKeyUp(event) {
      let keyCode = event.keyCode;
      
      input.lastKeyHit = -1
        
      if(event.preventDefault) {
        if (keyCode === 32)
          event.preventDefault();
      } else {
        event.returnValue = false;
      }
      
      if (event.stopPropagation !== undefined) {
          event.stopPropagation();
      }
      
      input.lastKeyCode = -1;
      input.keyJustReleased = keyCode;
      input.keysDown[keyCode] = false;
    };
    
    function onTouchStart(event) {
        let touch = event.changedTouches[0];
        
        input.isTouching = true;
        
        input.lastSwipe.fromX = touch.clientX;
        input.lastSwipe.fromY = touch.clientY;
        
        input.hasTapped = true;
        
        if(event.cancelBubble) {
            event.cancelBubble = true;
        }
    };
    
    function onTouchEnd(event) {
        let touch = event.changedTouches[0];
        
        input.isTouching = false;
        input.hasReleasedTap = true;
        
        input.lastSwipe.toX = touch.clientX;
        input.lastSwipe.toY = touch.clientY;
        
        let xDiff = input.lastSwipe.toX - input.lastSwipe.fromX;
        let yDiff = input.lastSwipe.toY - input.lastSwipe.fromY;
      
        input.lastSwipe.length = 
          Math.sqrt((xDiff * xDiff) + (yDiff * yDiff));
        
        input.lastSwipe.dx = xDiff;
        input.lastSwipe.dy = yDiff;
        
        if (input.lastSwipe.length !== 0) {
            let n = 1.0 / input.lastSwipe.length;
            input.lastSwipe.dx *= n;
            input.lastSwipe.dy *= n;
        }
        
        input.hasSwiped = true;
    };
    
    input.tapJustReleased = function() {
        if (input.hasTapped) {
            input.hasTapped = false;
            return true;
        }
        return false;
    }
    
    input.finish = function() {
        input.hasSwiped = false;
        input.hasTapped = false;
        input.hasReleasedTap = false;
        input.keyJustReleased = -1;
    };
    
    //window.body.addEventListener('keydown', onKeyDown, false);
    //window.body.addEventListener('keyup', onKeyUp, false);
    //window.body.addEventListener('touchstart', onTouchStart, false);
    //window.body.addEventListener('touchend', onTouchEnd, false);
  
    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);
    document.addEventListener('touchstart', onTouchStart, false);
    document.addEventListener('touchend', onTouchEnd, false);
    
    /*
    document.addEventListener('mousewheel', function(event) {
        input.wheelDelta = event.delta-30 || event.wheelDeltaY/4;
            
        if (event.preventDefault) {
            event.preventDefault();
        }
            
        if (event.stopPropagation) {
            event.stopPropagation();
        }
    });
    */
    
    return input;
    
}());








},{}],8:[function(require,module,exports){
'use strict';

module.exports = (function() {
  /* CHECK: can this precision be chopped off a little bit more? */
  const maths = {
    TO_RAD:  0.017453293,
    TO_DEG: 57.295779513,
    PI2: Math.PI * 2
  };

  maths.Vector3 = function(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  };

  maths.Vector3.prototype = {
    set: function(x, y, z) {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
    },

    copy: function(other) {
      this.set(other.x, other.y, other.z);
    },

    equal: function(other) {
      return this.x === other.x &&
        this.y === other.y &&
        this.z === other.z;
    },

    add: function(x, y, z) {
      this.x += x || 0;
      this.y += y || 0;
      this.z += z || 0;
    },

    addVec: function(other) {
      this.add(other.x, other.y, other.z);
    },


    sub: function(x, y, z) {
      this.x -= x || 0;
      this.y -= y || 0;
      this.z -= z || 0;
    },

    subVec: function(other) {
      this.sub(other.x, other.y, other.z);
    },


    mul: function(x, y, z) {
      this.x *= x || 0;
      this.y *= y || 0;
      this.z *= z || 0;
    },

    mulVec: function(other) {
      this.mul(other.x, other.y, other.z);
    },


    div: function(x, y, z) {
      this.x /= x || 1;
      this.y /= y || 1;
      this.z /= z || 1;
    },

    divVec: function(other) {
      this.div(other.x, other.y, other.z);
    },


    scale: function(s) {
      this.x *= s;
      this.y *= s;
      this.z *= s;
    },

    negate: function() {
      this.scale(-1);
    },

    dot: function(other) {
      return (this.x * other.x) + 
        (this.y * other.y) + 
        (this.z * other.z);
    },

    lengthSqr: function() {
      return this.dot(this);
    },

    length: function() {
      return Math.sqrt(this.lengthSqr());
    },

    normalize: function() {
      let len = this.length();

      if (len !== 0) {
        let n = 1.0 / len;
        this.scale(n);
      }
    },

    distanceToSqr: function(other) {
      let distance = new maths.Vector3( 
        other.x - this.x,
        other.y - this.y,
        other.z - this.z
      );

      return distance.lengthSqr();
    },

    distanceTo: function(other) {
      return Math.sqrt(this.distanceToSqr(other));
    },

    angleXZ: function() {
      return Math.atan2(this.z, this.x);
    },

    angleYZ: function() {
      return Math.atan2(this.z, this.y);
    },

    angleYX: function() {
      return Math.atan2(this.y, this.x);
    },

    toString: function() {
      return '(' + this.x + ', ' + this.y + ', ' + this.z + ')';
    }
  };

  maths.Transform = function(x, y, z, rx, ry, rz, sx, sy, sz, skx, sky) {
    this.position = new maths.Vector3(x, y, z);
    this.offset = new maths.Vector3(0, 0, 0)
    this.rotation = new maths.Vector3(rx, ry, rz);
    this.scale = new maths.Vector3(sx || 1, sy || 1, sz || 1);
    this.skew = { 
      x: skx || 0, 
      y: sky || 0 
    };

    this.prevPosition = new maths.Vector3(x, y, z);
    this.prevRotation = new maths.Vector3(rx, ry, rz);
    this.prevScale = new maths.Vector3(sx || 1, sy || 1, sz || 1);
    this.prevSkew = { x: this.skew.x, y: this.skew.y };

    this.cssPosition = '';
    this.cssRotation = '';
    this.cssScale = '';
    this.cssSkew = '';

    this.css = '';
    this.boundElement = null;

    this.update();
  };

  maths.Transform.stringify = function(x, y, z, rx, ry, rz, sx, sy, sz, 
    skx, sky) 
  {
    return `skew(${skx || 0}deg, ${sky || 0}deg)
    scale3d(${sx || 0}, ${sy || 0}, ${sz || 0})
    translate3d(${x || 0 }px, ${y || 0}px, ${z || 0}px)
    rotateX(${rx || 0}deg) rotateY(${ry || 0}deg) rotateZ(${rz || 0}deg)`
  }

  maths.Transform.prototype = {
    bindElement: function(element) {
      this.boundElement = element;
    },

    set: function(x, y, z, rx, ry, rz, sx, sy, sz, skx, sky) {
      this.position.set(x || 0, y || 0, z || 0);
      this.rotation.set(rx || 0, ry || 0, rz || 0);
      this.scale.set(sx || 1, sy || 1, sz || 1);
      this.skew.x = skx || 0;
      this.skew.y = sky || 0;
      this.update();
    },

    setLazy: function(x, y, z, rx, ry, rz, sx, sy, sz, skx, sky) {
      this.position.set(x, y, z);
      this.rotation.set(rx, ry, rz);
      this.scale.set(sx || 1, sy || 1, sz || 1);
      this.skew.x = skx || 0;
      this.skew.y = sky || 0;
    },

    setPosition: function(x, y, z) {
      this.position.set(x, y, z);
      this.updateCSSPosition();
    },

    setPositionLazy: function(x, y, z) {
      this.position.set(x, y, z);
    },

    setRotation: function(x, y, z) {
      this.rotation.set(x, y, z);
      this.updateCSSRotation();
    },

    setRotationLazy: function(x, y, z) {
      this.rotation.set(x, y, z);
    },

    setScale: function(x, y, z) {
      this.scale.set(x, y, z);
      this.updateCSSScale();
    },

    setScaleLazy: function(x, y, z) {
      this.scale.set(x, y, z);
    },

    setSkewing: function(x, y) {
      this.skew.x = x;
      this.skew.y = y;
      this.updateCSSSkewing();
    },

    setSkewingLazy: function(x, y) {
      this.skew.x = x;
      this.skew.y = y;
    },

    updateCSSPosition: function() {
      this.cssPosition = `translate3d(${this.position.x+this.offset.x}px,
        ${this.position.y+this.offset.y}px, 
        ${this.position.z+this.offset.z}px)`
      this.updateCSS();
    },

    updateCSSRotation: function() {
      this.cssRotation = `rotateX(${this.rotation.x}deg) 
      rotateY(${this.rotation.y}deg) 
      rotateZ(${this.rotation.z}deg)`;
      this.updateCSS();
    },

    updateCSSScale: function() {
      this.cssScale = `scale3d(${this.scale.x},
        ${this.scale.y},
        ${this.scale.z})`
      this.updateCSS();
    },

    updateCSSSkewing: function() {
      this.cssSkew = `skew(${this.skew.x}deg, ${this.skew.y}deg)`
    },

    updateCSS: function() {
      this.css = 
        `${this.cssSkew} 
         ${this.cssScale} 
         ${this.cssPosition} 
         ${this.cssRotation}`

      if (this.boundElement) {
        this.boundElement.style.transform = this.css;
      }
    },

    update: function() {
      this.updateCSSPosition();
      this.updateCSSRotation();
      this.updateCSSScale();
      this.updateCSSSkewing();
      this.updateCSS();
    },

    updatePreviousPosition: function() {
      this.prevPosition.copy(this.position);
    },

    updatePreviousRotation: function() {
      this.prevRotation.copy(this.rotation);
    },

    updatePreviousScale: function() {
      this.prevScale.copy(this.scale);
    },

    updatePreviousSkewing: function() {
      this.prevSkew.x = this.skew.x;
      this.prevSkew.y = this.skew.y;
    },

    updatePrevious: function() {
      this.prevPosition.copy(this.position);
      this.prevRotation.copy(this.rotation);
      this.prevScale.copy(this.scale);
      this.prevSkew.x = this.skew.x;
      this.prevSkew.y = this.skew.y;
    },

    hasChangedPosition: function() {
      return (!this.prevPosition.equal(this.position));
    },

    hasChangedRotation: function() {
      return (!this.prevRotation.equal(this.rotation));
    },

    hasChangedScale: function() {
      return (!this.prevScale.equal(this.scale));
    },

    hasChangedSkewing: function() {
      return (this.prevSkew.x != this.skew.x || 
        this.prevSkew.y != this.skew.y);
    },

    hasChanged: function() {
      return (this.hasChangedPosition() || 
        this.hasChangedPosition() ||
        this.hasChangedPosition() ||
        this.hasChangedSkewing());
    },

    lazyUpdate: function() {
      if (this.hasChangedPosition()) {
        this.updatePreviousPosition();
        this.updateCSSPosition();
      }

      if (this.hasChangedRotation()) {
        this.updatePreviousRotation();
        this.updateCSSRotation();
      }

      if (this.hasChangedScale()) {
        this.updatePreviousScale();                
        this.updateCSSScale();
      }

      if (this.hasChangedSkewing()) {
        this.updatePreviousSkewing();
        this.updateCSSSkewing();
      }
    },        

  };

  maths.lerp = function(from, to, time) {
    return from + time * (to - from);
  };

  /* Warning: Hackish and not precise! */
  maths.fastLerp = function(from, to, time) {
    let step = to - from;
    if (Math.abs(step) <= 0.1) return to;
    return from + time * step;
  };

  maths.clamp = function(value, min, max) {
    return Math.min(Math.max(min, value), max);
  };

  return maths;

}());




},{}],9:[function(require,module,exports){
'use strict';

module.exports = (function(utopy, input, graphics, assets, world, objects, camera, maths, shared) {
  const menu = {};
    
  menu.meshes = {
    logo: graphics.createFace(512, 512, assets.textures.menuLogo),
    btnSinglePlayer: graphics.createFace(128, 128, assets.textures.btnSinglePlayer),
    btnMultiPlayer: graphics.createFace(128, 128, assets.textures.btnMultiPlayer),
    btnQuestion: graphics.createFace(128, 128, assets.textures.btnQuestion),
    btnConfig: graphics.createFace(128, 128, assets.textures.btnConfig),
    btnClose: graphics.createFace(64, 64, assets.textures.btnClose),
    tutorial: graphics.createFace(128, 128, assets.textures.tutorial),
    config: graphics.createFace(128, 128, assets.textures.config),
    background: graphics.createFace(128, 128, assets.textures.menuBackground)
  };
    
  let bg, 
    logo, 
    btnPlaySingle, 
    btnPlayMulti, 
    btnQuestion, 
    btnConfig, 
    btnCloseTut, 
    btnCloseConfig, 
    tutorial, 
    config,
    p1ActionBox,
    p2ActionBox,
    keyGetting='';

  menu.init = function(init) {
    utopy.shared.simulation.timeScale = 1
    camera.setRotation(0, 0, 0);
    camera.setPosition(0, 0, 0);
    camera.zoom(1);
    
    graphics.setBackgroundColor('black');
    
    bg = new objects.GameObject({
      faces: menu.meshes.background, 
      position: new maths.Vector3(), 
      scale: new maths.Vector3(6, 8, 0)
    })
    world.add(bg)
    
    tutorial = new objects.GameObject({
      faces: menu.meshes.tutorial, 
      position: new maths.Vector3(0, 0, 1), 
      scale: new maths.Vector3(4, 4, 4),
      visible: false
    })
    
    tutorial.mesh.onclick = () => {
      tutorial.setVisible(false)
      btnCloseTut.setVisible(false)
    }

    world.add(tutorial)
    
    config = new objects.GameObject({
      faces: menu.meshes.config, 
      position: new maths.Vector3(0, 0, 1), 
      scale: new maths.Vector3(4, 4, 4),
      visible: false
    })
    
    let confText = document.createElement('div')
    confText.classList.add('text-config')
    confText.innerHTML = 'Setup'
    confText.style.transform = 'translateY(-55px)'
    
    let infoText = document.createElement('div')
    infoText.classList.add('warning-text')
    infoText.innerHTML = 'This game uses CSS3D technology. This *MAY* require the latest version of Google Chrome and decent hardware to run smoothly.'
    infoText.style.width = '120px'
    infoText.style.fontSize = '8px'
    infoText.style.transform = 'translateY(35px)'
    
    let p1Action = document.createElement('div')
    p1Action.classList.add('text-config')
    p1Action.innerHTML = 'BLUE action key: '
    p1Action.style.fontSize = '8px'
    p1Action.style.textShadow = '0px 1px #008899'
    p1Action.style.transform = 'translateX(-28px) translateY(-25px)'
    
    let p2Action = document.createElement('div')
    p2Action.classList.add('text-config')
    p2Action.innerHTML = 'RED action key: '
    p2Action.style.fontSize = '8px'
    p2Action.style.textShadow = '0px 1px #990088'
    p2Action.style.transform = 'translateX(-30px) translateY(-5px)'
    
    p1ActionBox = document.createElement('div')
    p1ActionBox.classList.add('action-key-box')
    let k = String.fromCharCode(shared.blueActionKey)
    p1ActionBox.innerHTML = k === ' ' ? 'SPACE' : k
    p1ActionBox.style.transform = 'translateX(34px) translateY(-25px)'
    p1ActionBox.onclick = () => getBlueActionKey()
    
    p2ActionBox = document.createElement('div')
    p2ActionBox.classList.add('action-key-box')
    k = String.fromCharCode(shared.redActionKey)
    p2ActionBox.innerHTML = k === ' ' ? 'SPACE' : k
    p2ActionBox.style.transform = 'translateX(34px) translateY(-5px)'
    p2ActionBox.onclick = () => getRedActionKey()
    
    config.mesh.appendChild(confText)
    config.mesh.appendChild(p1Action)
    config.mesh.appendChild(p2Action)
    config.mesh.appendChild(p1ActionBox)
    config.mesh.appendChild(p2ActionBox)
    config.mesh.appendChild(infoText)
    world.add(config)
    
    bg.mesh.onclick = () => {
      tutorial.setVisible(false)
      config.setVisible(false)
      btnCloseConfig.setVisible(false)
      btnCloseTut.setVisible(false)
    }
    
    logo = new objects.GameObject({faces: menu.meshes.logo, position: new maths.Vector3(0, -80, 0)});
    world.add(logo);
    
    btnPlaySingle = new objects.GameObject({
      faces: menu.meshes.btnSinglePlayer, 
      position: new maths.Vector3(-70, 180, 0)
    });
    
    btnPlaySingle.mesh.onclick = function() {
      //utopy.switchState('singlecharselectstate');
      utopy.switchState('charselectstate');
      //TESTING
      shared.selectedGameMode = 'single';
    };
    
    btnPlaySingle.mesh.onmouseenter = function() {
      btnPlaySingle.scale.set(1.3, 1.3, 1.3);
    };
    
    btnPlaySingle.mesh.onmouseleave = function() {
      btnPlaySingle.scale.set(1, 1, 1);
    };
    
    btnPlayMulti = new objects.GameObject({
      faces: menu.meshes.btnMultiPlayer, 
      position: new maths.Vector3(70, 180, 0)
    });
    
    btnPlayMulti.mesh.onmouseenter = function() {
      btnPlayMulti.scale.set(1.3, 1.3, 1.3);
    };
    
    btnPlayMulti.mesh.onmouseleave = function() {
      btnPlayMulti.scale.set(1, 1, 1);
    };
    
    btnPlayMulti.mesh.onclick = function() {
      utopy.switchState('charselectstate');
      shared.selectedGameMode = 'multi';
    };
    
    btnQuestion = new objects.GameObject({
      faces: menu.meshes.btnQuestion, 
      position: new maths.Vector3(-70, 310, 0)
    });
    
    btnQuestion.mesh.onmouseenter = function() {
      btnQuestion.scale.set(1.3, 1.3, 1.3);
    };
    
    btnQuestion.mesh.onmouseleave = function() {
      btnQuestion.scale.set(1, 1, 1);
    };
    
    btnQuestion.mesh.onclick = function() {
      showTutorial()
    };
    
    btnConfig = new objects.GameObject({
      faces: menu.meshes.btnConfig, 
      position: new maths.Vector3(70, 300, 0)
    });
    
    btnConfig.mesh.onmouseenter = function() {
      btnConfig.scale.set(1.3, 1.3, 1.3);
    };
    
    btnConfig.mesh.onmouseleave = function() {
      btnConfig.scale.set(1, 1, 1);
    };
    
    btnConfig.mesh.onclick = function() {
      showConfig()
    };
    
    btnCloseTut = new objects.GameObject({
      faces: menu.meshes.btnClose, 
      position: new maths.Vector3(220, -220, 10),
      visible: false
    });
    
    btnCloseTut.mesh.onclick = function() {
      tutorial.setVisible(false)
      btnCloseTut.setVisible(false)
    };
    
    btnCloseConfig = new objects.GameObject({
      faces: menu.meshes.btnClose, 
      position: new maths.Vector3(220, -220, 10),
      visible: false
    });
    
    btnCloseConfig.mesh.onclick = function() {
      config.setVisible(false)
      btnCloseConfig.setVisible(false)
    };
    
    world.add(btnCloseConfig)
    world.add(btnPlaySingle)
    world.add(btnPlayMulti)
    world.add(btnQuestion)
    world.add(btnConfig)
    tutorial.root.appendChild(btnCloseTut.root)
    config.root.appendChild(btnCloseConfig.root)
  };
  
  function getBlueActionKey() {
    if (keyGetting === '') {
      shared.blueActionKey = -1
      p1ActionBox.innerHTML = 'Press a key' 
      keyGetting = 'blue'
    }
  }
  
  function getRedActionKey() {
    if (keyGetting === '') {
      shared.redActionKey = -1
      p2ActionBox.innerHTML = 'Press a key' 
      keyGetting = 'red'
    }
  }
  let l = console.log 
  let angle = 0.0;
  menu.update = function(dt) {
    if (keyGetting === 'blue') {
      if (input.lastKeyHit !== -1) {
        shared.blueActionKey = input.lastKeyHit
        let str = String.fromCharCode(shared.blueActionKey)
        p1ActionBox.innerHTML = str === ' ' ? 'SPACE' : str
        keyGetting = ''
      }
    }  
    
    if (keyGetting === 'red') {
      if (input.lastKeyHit !== -1) {
        shared.redActionKey = input.lastKeyHit
        let str = String.fromCharCode(shared.redActionKey)
        p2ActionBox.innerHTML = str === ' ' ? 'SPACE' : str
        keyGetting = ''
      }
    }  
    
    angle += dt;
    
    if (angle >= 360) angle -= 360;
            
    logo.position.y = -80 + Math.sin(angle) * -4;
    
    btnPlaySingle.position.y = 180 + Math.sin(angle) * 4;
    btnPlaySingle.rotation.z = -80 + btnPlaySingle.position.y * 0.4;
    
    btnPlayMulti.position.y = 180 + Math.cos(angle) * 4;
    btnPlayMulti.rotation.z = 80 + btnPlayMulti.position.y * -0.4;
    
    btnQuestion.position.y = 320 + Math.cos(angle) * -4;
    btnQuestion.rotation.z = 120 + btnQuestion.position.y * -0.4;
    
    btnConfig.position.y = 320 + Math.cos(angle) * -8;
    btnConfig.rotation.z = 120 + btnConfig.position.y * -0.4;
    
    logo.update();
    btnPlaySingle.update();
    btnPlayMulti.update();
    btnQuestion.update();
    btnConfig.update();
    tutorial.update();
    btnCloseTut.update();
    btnCloseConfig.update();
    config.update();
  };
  
  function showTutorial() {
    tutorial.setVisible(true)
    config.setVisible(false)
    btnCloseTut.setVisible(true)
    btnCloseConfig.setVisible(false)
  }
  
  function showConfig() {
    config.setVisible(true)
    tutorial.setVisible(false)
    btnCloseConfig.setVisible(true)
    btnCloseTut.setVisible(false)
  }

  menu.finish = function() {
    world.destroy();
  };

  return menu;
}(
  window.utopy, 
  window.utopy.input, 
  window.utopy.graphics,
  window.utopy.assets,
  window.utopy.world,
  window.utopy.objects,
  window.utopy.camera,
  window.utopy.maths,
  window.utopy.shared
));

},{}],10:[function(require,module,exports){
'use strict';

module.exports = (function(maths, camera) {
    
    const objects = {
        DISPLAY_NORMAL: 0,
        DISPLAY_BILLBOARD: 1
    };
        
    objects.createAssembly = function(position, rotation, scale) {
        let assembly = document.createElement('div');
        assembly.classList.add('assembly');
        assembly.style.willChange = 'transform';
        
        let pos = position || new maths.Vector3();
        let rot = rotation || new maths.Vector3();
        let scl = scale || new maths.Vector3();
        
        assembly.transform = new maths.Transform(
            pos.x, pos.y, pos.z,
            rot.x, rot.y, rot.z,
            scl.x, scl.y, scl.z
        );
        
        assembly.transform.bindElement(assembly);
        
        return assembly;
    };
    
    
    /* Game Object */
    /* =========================================================== */
    objects.GameObject = function(data) {
      this.id = data.id || 'gameobject<' + Date.now() + '>';
      
      this.active = data.active !== undefined? data.active : true;
      this.visible = data.visible !== undefined? data.visible : true;
      
      this.bounds = new maths.Vector3(0, 0, 0);
      this.root = objects.createAssembly(data.position, null, null);
      this.mesh = objects.createAssembly(null, data.rotation, data.scale);
      
      this.root.appendChild(this.mesh);
      
      //this.displayStyle = 'normal' // can be set to normal or billboard so far
      this.displayStyle = data.displayStyle || objects.DISPLAY_NORMAL; // can be set to normal or billboard so far
      this.mesh.style.opacity = data.opacity !== undefined? data.opacity : 1;
      this.mesh.style.visibility = this.visible? 'visible' : 'hidden';
      
      if (data.faces) {
        if (data.faces instanceof Array) {
          this.mesh.appendFaces(data.faces);
        } else {
          this.mesh.appendChild(data.faces.cloneNode());
          if (data.faces.childElementCount > 0) {
            for (let i = 0; i < data.faces.childNodes.length; i++) {
              this.mesh.appendChild(data.faces.childNodes[i].cloneNode());
            }
          }
        }
      }
      
      this.rootTransform = this.root.transform;
      this.meshTransform = this.mesh.transform;
      
      this.position = this.rootTransform.position;
      this.rotation = this.meshTransform.rotation;
      this.scale = this.meshTransform.scale;
    
      this.rootTransform.update();
      this.meshTransform.update();
    };

    objects.GameObject.prototype.update = function() {
        switch (this.displayStyle) {
            case objects.DISPLAY_BILLBOARD: {
                this.root.transform.rotation.y = -camera.transform.rotation.y;
                this.mesh.transform.rotation.x = -camera.transform.rotation.x;
            } break;
            
            default: {
                
            } break;
        }
        
        this.rootTransform.lazyUpdate();
        this.meshTransform.lazyUpdate();
    };
    
    objects.GameObject.prototype.destroy = function() {
        this.root.remove();
    };
    
    objects.GameObject.prototype.setVisible = function(value) {
        this.visible = value;
        this.mesh.style.visibility = value? 'visible' : 'hidden';
    }
    
    objects.GameObject.prototype.setOpacity = function(value) {
        this.mesh.style.opacity = value;
    };
    
    objects.GameObject.prototype.setFaceCull = function(value) {
        this.mesh.style.backfaceVisibility = value? 'visible' : 'hidden';
    };
    
    objects.GameObject.prototype.getBoundsFront = function() {
        return this.position.z - (this.bounds.z / 2);
    };
    
    objects.GameObject.prototype.getBoundsBack = function() {
        return this.position.z + (this.bounds.z / 2);
    };
    
    objects.GameObject.prototype.getBoundsRight = function() {
        return this.position.x + (this.bounds.x / 2);
    };
    
    objects.GameObject.prototype.getBoundsLeft = function() {
        return this.position.x - (this.bounds.x / 2);
    };
    
    objects.GameObject.prototype.getBoundsTop = function() {
        return this.position.y - (this.bounds.y / 2);
    };
    
    objects.GameObject.prototype.getBoundsBottom = function() {
        return this.position.y + (this.bounds.y / 2);
    };
    
    objects.GameObject.prototype.getBoundsWidth = function() {
        return this.bounds.x / 2;
    };
    
    objects.GameObject.prototype.getBoundsHeight = function() {
        return this.bounds.z / 2;
    };
    
    objects.GameObject.prototype.getBoundsDepth = function() {
        return this.bounds.y / 2;
    };
    
    /* =========================================================== */
    
    return objects;
    
}(
    window.utopy.maths,
    window.utopy.camera
));
    







},{}],11:[function(require,module,exports){
/*
 * Beware of shitty "I fix it later" loaded code.
 * This should've never been shipped, to be quite honest NO CSS3D based game
 * should!!
 * It's pretty *hacky* and not optimized due to lack of interest.
 * Not gonna be spending more time with 3D Cascading Style Sh*t after this 
 * game for a LONG time!! I'm embarrased by this code. All of it.
 */

'use strict'

let _l = console.log

module.exports = (function(maths, assets, shared, utils, input, graphics,
  world, camera, objects, gui, timer)
{
  const GAME_MODE_SINGLE = 0,
    GAME_MODE_MULTI = 1,
    GAME_TURN_BLUE = 1,
    GAME_TURN_RED = 0

  const game = {
    debugCamera: false,

    physics: {
      // World
      gravity: 9.8,
      wind: false,

      // Characters
      initialCharacterSpeed: 240,

      // Axe
      axeMass: 185.0,
      axeBounciness: 0.75,
      axeDamping: 0.75,
      throwForceAccumSpeed: 35,
      throwForceMax: 1400,

      throwInfo: {
        origin: new maths.Vector3(),
        angle: 0,
        accumulatedForce: 0,
        force: 0,
        impactPosition: new maths.Vector3()
      }
    },

    view: {
      perspective: 460,
      zoom: 0.60,
      turnSpeed: 120,

      pitch: 0,
      yaw: -35,
      blueYaw: -36,
      redYaw: -136,

      focusAnimSpeed: 8,
      enableAimFocus: true
    },

    // I definitely need a scene editor and loader, this is lame stuff.
    scene: {
      characterSize: 85,
      axeSize: 70,

      corridorLength: 2500,
      corridorWidth: 512,
      corridorElevation: 100,
      corridorMistLength: 800,

      characterSeparation: 460, // 460
    },

    //
    // NOTE: The arrow image points up at 0deg, -180deg is down,
    // -90deg right and 90deg is left!
    //
    arrowAim: {
      animSpeed: 70,
      maxAngle: 45
    },

    //
    // Whose turn to throw the axe is this?
    // Note that I use a blue/red notation to separate the
    // two protagonists, I feel that playerOne and playerTwo 
    // is too cliche...
    //
    turn: GAME_TURN_BLUE, // 1 is blue, 0 is red

    scoreBlue: 0,
    scoreRed: 0,

    finished: false,

    mode: shared.selectedGameMode,
    // 100 is high, maybe 50 for soldiers and 0 for kings? 40 is also good 
    // for soldiers!
    AI_ERROR: 23, 
    paused: false
    //oldHiScore: 0
    //throwTimer: //timer.create({
    //duration:3.0, countDown: true, onCompleted:trySwitchTurns})
  }

  // Physics and scene shortcuts.
  let throwInfo = game.physics.throwInfo
  let camSide, isAiming, isAccumulatingForce

  //
  // Meshes and shapes.
  //

  game.meshes = {
    // Characters
    guard1: graphics.createFace(
      game.scene.characterSize, game.scene.characterSize,
      assets.textures[shared.selectedChar1],
      // This offset in the mesh's position is to make that dumb
      // running animation funnier by making it rotate about the
      // character belly's pivot. So much fun.
      0, -(game.scene.characterSize/8), 0
    ),

    goblin1: graphics.createFace(
      game.scene.characterSize, game.scene.characterSize,
      //assets.textures.goblin1,
      //shared.selectedChar2,
      assets.textures[shared.selectedChar2],
      0, -(game.scene.characterSize/8), 0
    ),

    // blue tag
    blueTag: graphics.createFace(
      16, 16,
      assets.textures.blueTag
    ),

    // red tag
    redTag: graphics.createFace(
      16, 16,
      assets.textures.redTag
    ),

    // Weapons
    axe: graphics.createFace(
      game.scene.axeSize, game.scene.axeSize,
      assets.textures.axe
    ),


    // indicators
    arrow: graphics.createFace(
      100, 100,
      assets.textures.arrow
    ),

    impactMarker: graphics.createFace(
      64, 64,
      assets.textures.impactMarker
    ),



    // Corridor
    corridor: graphics.createFace(
      512, game.scene.corridorLength,
      assets.textures.corridor.floor
    ),

    roof: graphics.createFace(
      512, game.scene.corridorLength,
      assets.textures.corridor.roof,
      0, 0, 512,
      0, -180, 0
    ),

    wallRight: graphics.createFace(
      game.scene.corridorLength, 512,
      assets.textures.corridor.wall,
      256, 0, 256,
      -90, -90, 0
    ),

    wallLeft: graphics.createFace(
      game.scene.corridorLength, 512,
      assets.textures.corridor.wall,
      -255, 0, 256,
      -90, 90, 0
    ),

    statue: graphics.createFace(
      128, 128,
      assets.textures.corridor.statue,
      0, 0, 0,
      0, 0, 0
    ),


    // I don't know how to make mist with divs,
    // so I just fake it by creating a hollow cube, with a gradient texture 
    // on each face pointing to the same direction.
    // Also, it is pretty wonky! The actual texture here should be
    // expanded to 512x512, but for z-fighting reasons, I have to offset 
    // the size a bit so that we can see it.
    // Note to myself: CSS3D is a big fat hack.
    backMist: graphics.createFadingTunnel(
      507, game.scene.corridorMistLength, 512,
      0, 
      -(game.scene.corridorLength/2)+(game.scene.corridorMistLength/2)-18, 
      256, 
      assets.textures.fadeDown
    ),

    frontMist: graphics.createFadingTunnel(
      506, game.scene.corridorMistLength, 512,
      0, 
      -(game.scene.corridorLength/2)+(game.scene.corridorMistLength/2)-18,
      256,
      assets.textures.fadeUp
    ),



    // Effects
    shadowBlob: graphics.createFace(
      64, 64,
      assets.textures.shadowBlob
    ),

    hit: graphics.createFace(
      180, 180,
      assets.textures.hit1
    ),

    lightRay: graphics.createFace(
      64, 400,
      assets.textures.lightRay,
      0, 0, 0,
      0, 0, 0,
      40, 0
    ),

    lightQuad: graphics.createFace(
      64, 64,
      ':rgba(255, 255, 255, 0.05)',
      0, 0, 0,
      90, 0, 0
    )

  }

  game.sounds = {
    axeThrow: document.getElementById('snd-axe-throw'),

    axeHitFloor1: document.getElementById('snd-axe-hit-floor1'),
    axeHitFloor2: document.getElementById('snd-axe-hit-floor2'),
    axeHitFloor3: document.getElementById('snd-axe-hit-floor3'),
    axeHitFloor4: document.getElementById('snd-axe-hit-floor4'),

    axeOnFlesh: document.getElementById('snd-axe-on-flesh')
  }

  game.sounds.hitFloor = [
    'axeHitFloor1',
    'axeHitFloor2',
    'axeHitFloor3',
    'axeHitFloor4'
  ]

  // Persist
  ;(function setupMeshes() {
    let corridor = game.meshes.corridor

    corridor.appendChild(game.meshes.wallRight)
    corridor.appendChild(game.meshes.wallLeft)
    corridor.appendChild(game.meshes.roof)

    corridor.appendFaces(game.meshes.backMist)
    corridor.appendFaces(game.meshes.frontMist)
  }())

  let labelScore, labelHiScore, labelStart, labelThrowTime;
  function createHUD() {
    assets.loadCorridorTextures(shared.selectedCorridor)
    let btnBack = gui.createButton(
      'assets/images/btnBack.png',
      {
        onmouseover: (e) => {
          e.srcElement.style.transform = 
            'translateX(16px) translateY(16px) scaleX(2.5) scaleY(2.5)'
        },

        onmouseleave: (e) => {
          e.srcElement.style.transform = 
            'translateX(16px) translateY(16px) scaleX(2) scaleY(2)'
        },

        onmousedown: (e) => {
          e.srcElement.style.transform = 
            'translateX(16px) translateY(16px) scaleX(1.5) scaleY(1.5)'
        },

        onmouseup: (e) => {
          e.srcElement.style.transform = 
            'translateX(16px) translateY(16px) scaleX(2.5) scaleY(2.5)'
          //if (!game.finished)
            utopy.switchState('menustate')
        }
      }
    )

    btnBack.style.transform = 
      'translateX(16px) translateY(16px) scaleX(2) scaleY(2)'

    //if (game.mode === GAME_MODE_MULTI) {
      let blueTagMark = gui.createImage('assets/images/blue-tag.png')
      blueTagMark.style.transform = 
        'translateX(170px) translateY(40px) scaleX(2) scaleY(2)'

      let redTagMark = gui.createImage('assets/images/red-tag.png')
      redTagMark.style.transform = 
        'translateX(226px) translateY(40px) scaleX(2) scaleY(2)'
    //}

    //labelScore = gui.createLabel(
      //game.mode === GAME_MODE_MULTI ? 
      //game.scoreBlue + 'x' + game.scoreRed : game.scoreBlue
    //)
    
    labelScore = gui.createLabel(game.scoreBlue + 'x' + game.scoreRed);

    labelScore.style.transform= 'translateX(200px)'
    labelScore.style.top = '0%'
    labelScore.classList.add('text-score')

    if (game.mode === GAME_MODE_MULTI) {
      //labelThrowTime = gui.createLabel(game.throwTimer.time.toFixed(0))
      //labelThrowTime.style.transform= 'translateX(370px) translateY(560px)'
      //labelThrowTime.style.top = '0%'
      //labelThrowTime.classList.add('text-score')
      //labelThrowTime.style.fontSize = '30px'
    }

    //if (game.mode === GAME_MODE_SINGLE)
    createScoreUI(false)
  }

  let labelNewHiScore;
  function createScoreUI(lose) {
    //labelStart = gui.createLabel(
      //lose?'You\'re dead! <br/><br />Press ACTION or TAP to start again!'
      //:'Press ACTION or TAP to start.')
    //labelStart.style.transform= 'translateX(200px) translateY(190px)'
    //labelStart.style.top = '0%'
    //labelStart.classList.add('text-score')
    //labelStart.style.width = '260px'
    //labelStart.style.fontSize = '40px'

    //labelHiScore = gui.createLabel(shared.hiScore)
    //labelHiScore.style.transform= 'translateX(200px) translateY(80px)'
    //labelHiScore.classList.add('text-hi-score')
    //labelHiScore.style.width = '260px'

    //if (lose) {
      //labelNewHiScore = gui.createLabel(
        //game.scoreBlue>game.oldHiScore?
        //'New high score!':''
      //)
      //labelNewHiScore.style.transform = 
        //'translateX(200px) translateY(120px)'
      //labelNewHiScore.classList.add('text-hi-score')
      //labelNewHiScore.style.width = '260px'
      //labelNewHiScore.style.fontSize = '25px'
      //if (game.oldHiScore !== shared.hiScore) 
        //game.oldHiScore = shared.hiScore
    //}

  }

  // Each corridor will have different physics profiles,
  // this way the game will feel less repetitive.
  function setupCorridorPhysics(corridor) {
    switch(corridor) {
      case 'corridorHumans': {
        game.physics.gravity = 9.8
        game.physics.axeBounciness = 0.75
        game.physics.wind = false
      } break;

      case 'corridorGoblins': {
        game.physics.gravity = 5.3
        game.physics.axeBounciness = 0.75
        game.physics.wind = false
      } break;

      case 'corridorBarbarians': {
        game.physics.gravity = 12.0
        game.physics.axeBounciness = 0.9
        game.physics.wind = false
      } break;

      case 'corridorGovernment': {
        game.physics.gravity = 9.8
        game.physics.axeBounciness = 0.75
        game.physics.wind = true
      } break;

      defaut: break;
    }
  }


  //
  // Game entities/objects.
  //

  let corridor,
    blue,
    blueShadowBlob,
    blueTag,
    red,
    redShadowBlob,
    redTag,
    arrow,
    axe,
    shadowBlob,
    hit,
    charHit,
    impactMarker,
    statues = [],
    lightRays = [],
    screenFlash = document.getElementById('screen-flash')

  function createObjects() {
    createHUD()

    setupCorridorPhysics(shared.selectedCorridor)

    graphics.setFaceTexture(
      game.meshes.corridor, assets.textures.corridor.floor
    )
    graphics.setFaceTexture(
      game.meshes.roof, assets.textures.corridor.roof
    )
    graphics.setFaceTexture(
      game.meshes.wallLeft, assets.textures.corridor.wall
    )
    graphics.setFaceTexture(
      game.meshes.wallRight, assets.textures.corridor.wall
    )
    graphics.setFaceTexture(
      game.meshes.statue, assets.textures.corridor.statue
    )

    graphics.setFaceTexture(
      game.meshes.guard1, assets.textures[shared.selectedChar1]
    )
    graphics.setFaceTexture(
      game.meshes.goblin1, assets.textures[shared.selectedChar2]
    )

    blue = new objects.GameObject({
      faces: game.meshes.guard1,
      position: new maths.Vector3(),
      displayStyle: objects.DISPLAY_BILLBOARD,
      id: 'blue'
    })

    blueShadowBlob = new objects.GameObject({
      faces: game.meshes.shadowBlob,
      position: new maths.Vector3(),
      rotation: new maths.Vector3(90, 0, 0),
      id: 'blueShadowBlob'
    })

    blueTag = new objects.GameObject({
      faces: game.meshes.blueTag,
      position: new maths.Vector3(),
      scale: new maths.Vector3(1.2, 1.2, 1.2),
      active: false,
      visible: true,
      displayStyle: objects.DISPLAY_BILLBOARD,
      id: 'blueTag'
    })

    red = new objects.GameObject({
      faces: game.meshes.goblin1,
      position: new maths.Vector3(),
      displayStyle: objects.DISPLAY_BILLBOARD,
      id: 'red'
    })

    redShadowBlob = new objects.GameObject({
      faces: game.meshes.shadowBlob,
      position: new maths.Vector3(),
      rotation: new maths.Vector3(90, 0, 0),
      id: 'redShadowBlob'
    })

    redTag = new objects.GameObject({
      faces: game.meshes.redTag,
      position: new maths.Vector3(),
      scale: new maths.Vector3(1.2, 1.2, 1.2),
      active: false,
      visible: true,
      displayStyle: objects.DISPLAY_BILLBOARD,
      id: 'redTag'
    })

    axe = new objects.GameObject({
      faces: game.meshes.axe,
      position: new maths.Vector3(),
      active: false,
      visible: false,
      displayStyle: objects.DISPLAY_BILLBOARD,
      id: 'axe'
    })

    shadowBlob = new objects.GameObject({
      faces: game.meshes.shadowBlob,
      position: new maths.Vector3(),
      rotation: new maths.Vector3(90, 0, 0),
      visible: false,
      id: 'shadowBlob'
    })

    arrow = new objects.GameObject({
      faces: game.meshes.arrow,
      position: new maths.Vector3(0, 400, 0),
      rotation: new maths.Vector3(90, 0, 0),
      id: 'arrow'
    })

    impactMarker = new objects.GameObject({
      faces: game.meshes.impactMarker,
      position: new maths.Vector3(),
      rotation: new maths.Vector3(90, 0, 0),
      id: 'impactMarker'
    })

    corridor = new objects.GameObject({
      faces: game.meshes.corridor,
      position: new maths.Vector3(0, -game.scene.corridorElevation, 0),
      rotation: new maths.Vector3(90, 0, 0),
      id: 'corridor'
    })

    hit = new objects.GameObject({
      faces: game.meshes.hit,
      position: new maths.Vector3(),
      rotation: new maths.Vector3(90, 0, 0),
      opacity: 0,
      id: 'hit'
    })

    charHit = new objects.GameObject({
      faces: game.meshes.hit,
      position: new maths.Vector3(),
      rotation: new maths.Vector3(),
      opacity: 0,
      displayStyle: objects.DISPLAY_BILLBOARD,
      id: 'charHit'
    })
  }

  function getRandomCharX() {
    let rLen = (game.scene.corridorWidth*0.5) - 
      (game.scene.characterSize*0.5 * 1.5)
    return -rLen + (Math.random() * rLen * 2)
  }

  // Should've been called: "sh*t everything".
  function setupObjects() {
    let corridorWidth = game.scene.corridorWidth
    let halfCorridorWidth = game.scene.corridorWidth * 0.5

    let charSize = game.scene.characterSize
    let halfCharSize = game.scene.characterSize * 0.5

    let ground = -game.scene.corridorElevation - halfCharSize


    // Corridor
    corridor.width = game.scene.corridorWidth
    corridor.halfWidth = corridor.width * 0.5
    corridor.length = game.scene.corridorLength

    let statueY = corridor.position.y-65
    let statueRight = corridor.halfWidth-64
    let statueLeft = -corridor.halfWidth+64
    let statueBack = -corridor.length*0.3
    let statueFront = corridor.length*0.3

    statues[0] = new objects.GameObject({
        faces: game.meshes.statue,
        position: new maths.Vector3(statueRight, statueY, statueBack),
        scale: new maths.Vector3(-1, 1, 1),
        id: 'statue'
    })

    statues[1] = new objects.GameObject({
      faces: game.meshes.statue,
      position: new maths.Vector3(statueLeft, statueY, statueBack),
      id: 'statue'
    })

    statues[2] = new objects.GameObject({
      faces: game.meshes.statue,
      position: new maths.Vector3(statueRight, statueY, statueFront),
      scale: new maths.Vector3(-1, 1, 1),
      id: 'statue'
    })

    statues[3] = new objects.GameObject({
      faces: game.meshes.statue,
      position: new maths.Vector3(statueLeft, statueY, statueFront),
      id: 'statue'
    })

    let lightRayRight = corridor.width-456
    let lightRaysTopY = corridor.position.y - 200
    let lightRaysBottomY = corridor.position.y - 120
    let lightRaysFrontZ = 185
    let lightRaysBackZ = 125

    lightRays[0] = new objects.GameObject({
      faces: game.meshes.lightRay,
      position: new maths.Vector3(
        lightRayRight, lightRaysTopY, lightRaysFrontZ
      ),
      rotation: new maths.Vector3(0, 0, 90),
      opacity: 0.12,
      id: 'lightray'
    })

    lightRays[1] = new objects.GameObject({
      faces: game.meshes.lightRay,
      position: new maths.Vector3(
        lightRayRight, lightRaysBottomY, lightRaysFrontZ
      ),
      rotation: new maths.Vector3(0, 0, 90),
      opacity: 0.12,
      id: 'lightray'
    })

    lightRays[2] = new objects.GameObject({
      faces: game.meshes.lightRay,
      position: new maths.Vector3(
        lightRayRight, lightRaysTopY, lightRaysBackZ
      ),
      rotation: new maths.Vector3(0, 0, 90),
      opacity: 0.12,
      id: 'lightray'
    })

    lightRays[3] = new objects.GameObject({
      faces: game.meshes.lightRay,
      position: new maths.Vector3(
        lightRayRight, lightRaysBottomY, lightRaysBackZ
      ),
      rotation: new maths.Vector3(0, 0, 90),
      opacity: 0.12,
      id: 'lightray'
    })


    /* Quads */
    lightRays[4] = new objects.GameObject({
      faces: game.meshes.lightQuad,
      position: new maths.Vector3(
        -90, corridor.position.y-1, lightRaysFrontZ
      )
    })

    lightRays[5] = new objects.GameObject({
      faces: game.meshes.lightQuad,
      position: new maths.Vector3(
        -170, corridor.position.y-1, lightRaysFrontZ
      )
    })

    lightRays[6] = new objects.GameObject({
      faces: game.meshes.lightQuad,
      position: new maths.Vector3(
        -90, corridor.position.y-1, lightRaysBackZ-20
      )
    })

    lightRays[7] = new objects.GameObject({
      faces: game.meshes.lightQuad,
      position: new maths.Vector3(
        -170, corridor.position.y-1, lightRaysBackZ-20
      )
    })


    // Blue
    blue.position.set(
      getRandomCharX(), ground, game.scene.characterSeparation
    )
    blue.bounds.set(charSize, charSize, charSize)
    blue.velocity = new maths.Vector3(1, 0, 0)
    blue.speed = game.physics.initialCharacterSpeed
    blue.mass = 80
    blue.jumpForce = -240
    blue.jumpMul = 1.0
    blue.animRot = 0
    blue.isJumping = false
    blue.jumpCount = 0


    // Red
    red.position.set(
      getRandomCharX(), ground, -game.scene.characterSeparation
    )
    red.bounds.set(charSize, charSize, charSize)
    red.velocity = new maths.Vector3(-1, 0, 0)
    red.speed = game.physics.initialCharacterSpeed
    red.mass = 80
    red.jumpForce = -240
    red.jumpMul = 1.0
    red.animRot = 0
    red.isJumping = false
    red.jumpCount = 0


    // Axe
    axe.bounds.set(
      game.scene.axeSize, game.scene.axeSize, game.scene.axeSize
    )
    axe.velocity = new maths.Vector3()
    axe.damping = game.physics.axeDamping
    axe.mass = game.physics.axeMass
    axe.bounciness = game.physics.axeBounciness


    // Arrow
    arrow.rotation = arrow.root.transform.rotation
    arrow.direction = -90
    arrow.animSpeed = game.arrowAim.animSpeed
    arrow.animDir = 1
    arrow.mesh.transform.position.set(0, 0, -45)
    arrow.mesh.classList.add('smoothFade')


    // Circle marker
    impactMarker.setOpacity(0)
    impactMarker.mesh.classList.add('smoothFade')
    impactMarker.position.set(0, corridor.position.y, 0)
    impactMarker.update()

    // Screen flash
    screenFlash.style.visibility = 'visible'
  }

  function addObjects() {
    world.add(corridor)

    for (let i = 0; i < statues.length; i++) {
      world.add(statues[i])
    }

    for (let i = 0; i < lightRays.length; i++) {
      world.add(lightRays[i])
    }

    world.add(blue)
    world.add(blueShadowBlob)
    world.add(blueTag)

    world.add(red)
    world.add(redShadowBlob)
    world.add(redTag)

    world.add(axe)
    world.add(shadowBlob)
    world.add(hit)
    world.add(charHit)

    world.add(arrow)
    world.add(impactMarker)
  }


  //
  // General game initialization.
  //

  game.init = function() {
    game.mode = shared.selectedGameMode === 
      'single' ? GAME_MODE_SINGLE : GAME_MODE_MULTI

    //if (game.mode === GAME_MODE_SINGLE) {
      ////game.view.enableAimFocus = false
      ////TESTING
      //game.view.enableAimFocus = true

      ////shared.simulation.timeScale = 0
      //shared.simulation.timeScale = 1
      //game.paused = false
      ////game.oldHiScore = shared.hiScore
    //} else {
      //game.view.enableAimFocus = true
      //shared.simulation.timeScale = 1
      //game.paused = false
    //}
    game.view.enableAimFocus = true
    shared.simulation.timeScale = 1
    game.paused = false

    graphics.setBackgroundColor(shared.colors.background)

    camera.setRotation(game.view.yaw, game.view.pitch, 0)
    camera.zoom(game.view.zoom)
    camera.perspective = 540 // 590

    game.finished = false
    game.turn = GAME_TURN_BLUE
    game.scoreBlue = 0
    game.scoreRed = 0
    camSide = 1
    isAiming = true
    isAccumulatingForce = false

    createObjects()
    setupObjects()
    addObjects()

    //if (game.mode === GAME_MODE_MULTI)
      //timer.start(game.throwTimer)
  };

  function beginMatch() {
    game.paused = false
    //gui.removeElement(labelStart)
    //gui.removeElement(labelHiScore)
    gui.removeElement(labelNewHiScore)
    shared.simulation.timeScale = 1
    game.scoreBlue = 0
    updateGUI()
  }

  //
  // Main update.
  //

  let shakeCamera = false
  game.update = function(dt) {
    if (!game.finished) {
      if (game.mode === GAME_MODE_SINGLE) {
        if (game.paused) {
          if (input.getKeyJustPressed(shared.blueActionKey) || 
            input.tapJustReleased())
            beginMatch()

          playLockQueue = []
          clearTimeout(audioTimer)
        }
      }

      camSide = camera.transform.rotation.y > 90 ? -1 : 1

      if (game.turn === GAME_TURN_BLUE) {
        blueTurn(dt)
      } else {
        redTurn(dt)
      }

      if (isAccumulatingForce) {
        accumulateShootForce(dt)
        calculateImpactPosition(dt)
      }

      if (axe.active) {
        updateAxe(dt)
        shadowBlob.position.set(
            axe.position.x,
            -game.scene.corridorElevation-1,
            axe.position.z
        )
      }

      blueShadowBlob.position.set(
        blue.position.x, -game.scene.corridorElevation, blue.position.z
      )
      redShadowBlob.position.set(
        red.position.x, -game.scene.corridorElevation, red.position.z
      )

      blueTag.position.set(blue.position.x, -240, blue.position.z-8)
      redTag.position.set(red.position.x, -240, red.position.z+8)

      blueTag.update()
      redTag.update()

      updateEntities()

      if (game.scoreBlue >= shared.gameScore || 
        game.scoreRed >= shared.gameScore) 
      {
        endGame(game.scoreBlue > game.scoreRed ? 1 : 0)
        game.finished = true
      }

      //if (game.mode === GAME_MODE_MULTI) {
        //updateThrowTimer(dt)
      //}
    }

    updateCamera(dt)
    animate(dt)
  };

  function updateThrowTimer(dt) {
    labelThrowTime.innerHTML = Math.abs(game.throwTimer.time.toFixed(0))
  }

  function endGame(winner) {
    let labelWinner = gui.createLabel(
      winner?'Blue player wins!':'Red player wins!'
    )
    labelWinner.classList.add('text-score')
    labelWinner.style.transform = 'translateX(200px) translateY(200px)'
    labelWinner.style.width = '300px'

    let labelRematch = gui.createLabel('Rematch?')
    labelRematch.classList.add('text-score')
    labelRematch.style.transform = 'translateX(200px) translateY(350px)'
    labelRematch.style.fontSize = '60px'
    labelRematch.style.width = '300px'

    let btnRematch = gui.createButton(
      'assets/images/btnArrow.png',
      {
        onmouseover: (e) => {
          e.srcElement.style.transform = 
            'translateX(180px) translateY(420px) scaleX(2.5) scaleY(2.5)'
        },

        onmouseleave: (e) => {
          e.srcElement.style.transform = 
            'translateX(180px) translateY(420px) scaleX(2) scaleY(2)'
        },

        onmousedown: (e) => {
          e.srcElement.style.transform = 
            'translateX(180px) translateY(420px) scaleX(1.5) scaleY(1.5)'
        },

        onmouseup: (e) => {
          e.srcElement.style.transform = 
            'translateX(180px) translateY(420px) scaleX(2.5) scaleY(2.5)'
          utopy.switchState('playstate')
          //game.finished = false
        }
      }
    )

    btnRematch.style.transform = 
      'translateX(180px) translateY(420px) scaleX(2.5) scaleY(2.5)'
    /*
    setTimeout(() => {
      game.finished = false
      utopy.switchState('charselectstate')
    }, 4000)*/
  }

  function animate(dt) {
    if (isAiming) {
      animateArrow(dt)
    }

    if (!red.active) {
      animCharDeath(red, dt)
    }

    if (!blue.active) {
      animCharDeath(blue, dt)
    }

    if (hit.active) {
      hit.mesh.style.opacity -= 2.5 * dt
      if (hit.mesh.style.opacity <= 0) {
        hit.setVisible(false)
      }
    }

    if (screenFlash.style.opacity > 0) {
      screenFlash.style.opacity -= dt * 10
    }
  }

  // I do need some basic fake-physics engine to avoid this,
  // kind of thing. This is definitely on my todo-list.
  function animCharDeath(char, dt) {
    char.rotation.z += 
      -Math.sign(char.velocity.x+1) * (10 * (char.velocity.z * 0.2)) * dt

    if(char.getBoundsBottom() <= -game.scene.corridorElevation)
      char.velocity.y += 3000 * dt

    let damp = Math.pow(0.25, dt)
    char.velocity.x *= damp
    char.velocity.z *= damp

    char.position.x += char.velocity.x * dt
    char.position.y += char.velocity.y * dt
    char.position.z += char.velocity.z * dt

    if (char.getBoundsLeft() <= -corridor.halfWidth) {
      char.position.x += 1
      char.velocity.x *= -1
    }

    if (char.getBoundsRight() >= corridor.halfWidth) {
      char.position.x -= 10
      char.velocity.x *= -1
    }

    if (char.getBoundsBottom() >= -game.scene.corridorElevation) {
      char.position.y -= 1
      char.velocity.y /= -1.4
    }

    if (char.velocity.length() < 500 && !axe.active) {
      char.velocity.set(game.turn === GAME_TURN_RED? 1 : -1, 0, 0)
      char.position.set(
          getRandomCharX(),
          -game.scene.corridorElevation+char.bounds.y,
          (game.turn === GAME_TURN_BLUE && !blue.active? 
            game.scene.characterSeparation 
            : -game.scene.characterSeparation) // FIXME
      )
      char.rotation.z = 0
      char.active = true
    }
  }


  //
  // Turn stuff.
  //

  function enterBlueTurn() {
    blue.isJumping = false
    blue.jumpCount = 0
    blue.jumpMul = 1.0
    blue.animRot = 0
    game.turn = GAME_TURN_BLUE
    blue.rotation.z = 0
    adjustArrowDirection(0)
  }

  function enterRedTurn() {
    red.isJumping = false
    red.jumpCount = 0
    red.jumpMul = 1.0
    red.animRot = 0
    game.turn = GAME_TURN_RED
    red.rotation.z = 0
    adjustArrowDirection(-180)
  }

  // FIXME
  function trySwitchTurns() {
    //if (!isAiming && !axe.active) {
    //_l('switch')
      switchTurns()
    //}
  }

  function switchTurns() {
    arrow.update()
    isAIWaiting=false
    canShoot=false

    if (game.turn === GAME_TURN_BLUE) {
      enterRedTurn()
    } else if (game.turn === GAME_TURN_RED) {
      enterBlueTurn()
    }

    //if (game.mode === GAME_MODE_MULTI) {
      //timer.reset(game.throwTimer)
    //}
  }

  function hasPressedShoot() {
    if (game.paused) {
      return
    }

    let yeah = null

    if (game.turn === GAME_TURN_BLUE) {
      yeah = input.getKeyJustPressed(shared.blueActionKey) 
        || input.tapJustReleased()
    } else {
      yeah = 
        input.getKeyJustPressed(shared.redActionKey) 
        || input.tapJustReleased()
    }

    //return (input.getKeyJustPressed(input.keys.space) 
    //|| input.tapJustReleased()) && !game.paused
    return yeah
  }

  function prepareShoot(char) {
    if (!isAccumulatingForce && hasPressedShoot() && !axe.active) {
      throwInfo.origin.x = char.position.x
      throwInfo.origin.y = char.position.y
      throwInfo.origin.z = char.position.z
      impactMarker.setOpacity(1)
      isAccumulatingForce = true
    }
  }

  function aimToShoot(char) {
    if (!isAccumulatingForce && !axe.active) {
      throwInfo.origin.x = char.position.x
      throwInfo.origin.y = char.position.y
      throwInfo.origin.z = char.position.z
      impactMarker.setOpacity(1)
      isAccumulatingForce = true
    }
  }

  let canShoot = false, isAIWaiting = false
  // Make AI always shoot perfectly at the opponent's position... 
  // Theoretically...
  function checkShooting(char) {
    if(game.mode === GAME_MODE_SINGLE && game.turn === GAME_TURN_RED) {
      let opp = game.turn === GAME_TURN_BLUE ? red : blue
      let oppX = opp.position.x
      let oppVelX = opp.velocity.x * camSide
      let xx = 0
      let s = game.physics.initialCharacterSpeed + 10

      xx = oppX
      xx += (s * oppVelX * camSide)

      let ll = 190
      if (xx > ll) {
        if (oppVelX * -camSide > 0)
          xx = (xx/-1.5)
        else
          xx = (xx/-3)
      }

      if (xx < -ll) {
        if (oppVelX * -camSide < 0)
          xx = (xx/-1.5)
        else
          xx = (xx/-3)
      }

      if (shared.selectedCorridor == 'corridorGovernment') {
        xx += 200 * -camSide
      }

      // This makes it possible to reduce the AI's difficulty by just
      // from changing one value!
      xx += game.AI_ERROR * (1 + Math.random() * 2)

      let angle = -((Math.atan2(opp.position.z - char.position.z, 
        xx - char.position.x) * 180 / Math.PI) + 90)
      let arrToTarget = Math.abs(arrow.rotation.y - angle)

      if (!isAIWaiting) {
        setTimeout(() => {
          canShoot = true
        }, 800 + Math.random() * 500)
        isAIWaiting = true
      }

      if (canShoot) {
        if (!axe.active && !isAccumulatingForce) {
          if (arrToTarget < 2)
            aimToShoot(char)
        }

        // Choose a good z distance to shoot
        if (isAccumulatingForce && !axe.active) {
          if (Math.abs(impactMarker.position.z - opp.position.z) <= 30) {
            shootAxe()
            canShoot = false
          }
        }
      }
    } else {
      if (char.active
        && (char.position.z <= game.scene.characterSeparation 
         && char.position.z >= -game.scene.characterSeparation)) 
      {
        prepareShoot(char)
        if (hasPressedShoot() && isAccumulatingForce && !axe.active) {
          shootAxe()
        }
      }
    }
  }

  function updateGUI() {
    //if (game.mode == GAME_MODE_SINGLE) {
      //labelScore.innerHTML = game.scoreBlue
    //} else {
      //labelScore.innerHTML = game.scoreBlue + 'x' + game.scoreRed
    //}
    
    labelScore.innerHTML = game.scoreBlue + 'x' + game.scoreRed
  }

  let charGround = 
    (-game.scene.corridorElevation - (game.scene.characterSize * 0.5))
  function blueTurn(dt) {
    blue.position.y = charGround
    checkShooting(blue)

    if (red.active && collidedWithAxe(red) 
      && axe.velocity.length() >= 700) {
      killChar(red)
      game.scoreBlue++
      updateGUI()
    }

    if (red.active) {
      pingPong(red, dt)
    }
  }

  function redTurn(dt) {
    red.position.y = charGround
    checkShooting(red)

    if (blue.active && collidedWithAxe(blue) 
      && axe.velocity.length() >= 700) {

      //if (game.mode === GAME_MODE_MULTI) {
        game.scoreRed++
        updateGUI()
      //}

      //if (game.mode === GAME_MODE_SINGLE) {
        ////shared.hiScore = Math.max(shared.hiScore, game.scoreBlue)
        //createScoreUI(true)
        //setTimeout(()=>{pauseGame()}, 300)
      //}

      killChar(blue)
    }

    if (blue.active) {
      pingPong(blue, dt)
    }
  }

  function pauseGame() {
    game.paused = true
    shared.simulation.timeScale = 0
  }

  function killEffect() {
    screenFlash.style.opacity = 0.8
  }

  function killChar(char) {
    playSound('axeOnFlesh', 2, true)

    killFreeze()
    shakeCamera = true

    char.active = false
    char.position.y -= char.bounds.y * 0.2
    char.velocity.set()
    char.isJumping = false
    char.velocity.x = 600 * -Math.sign(axe.velocity.x)
    char.velocity.y = Math.abs(axe.velocity.z) > 400 ? -900 : -250
    char.velocity.z = 2 * axe.velocity.z

    isAIWaiting = false

    showCharHitEffect()
  }

  function killFreeze() {
    shared.simulation.timeScale = 0.0001
    setTimeout(function(){
      shared.simulation.timeScale = 1
      charHit.active = false
      charHit.setVisible(false)
    }, 200)
    killEffect()
  }

  function addCharAnim(char, animName) {
    if (!char.mesh.classList.contains(animName)) {
      char.mesh.classList.add(animName)
    }
  }

  function removeCharAnim(char, animName) {
    if (char.mesh.classList.contains(animName)) {
      char.mesh.classList.remove(animName)
    }
  }

  function pingPong(char, dt) {
    if (char.getBoundsRight() >= corridor.halfWidth) {
      char.velocity.x = -1
    }

    if (char.getBoundsLeft() <= -corridor.halfWidth) {
      char.velocity.x = 1
    }

    char.position.x += char.velocity.x * char.speed * dt

    char.position.y = 
      charGround + Math.cos(maths.PI2 * (char.position.x * 0.0175)) * 12
    char.rotation.z = Math.sin(maths.PI2 * (char.position.x * 0.0175)) 
      * maths.TO_DEG * (0.2 * camSide)
  }


  //
  // Physics.
  //

  function accumulateShootForce(dt) {
    isAiming = false
    throwInfo.angle = arrow.direction

    throwInfo.accumulatedForce += 
      Math.pow(game.physics.throwForceAccumSpeed, 2) * dt

    throwInfo.accumulatedForce = 
      maths.clamp(throwInfo.accumulatedForce, 0, game.physics.throwForceMax)

    throwInfo.force = throwInfo.accumulatedForce
  }

  let impactPosition = throwInfo.impactPosition
  function calculateImpactPosition(dt) {
    impactPosition.x = 
      Math.cos(throwInfo.angle * maths.TO_RAD) * throwInfo.force

    impactPosition.y = -throwInfo.force

    impactPosition.z = 
      Math.sin(throwInfo.angle * maths.TO_RAD) * throwInfo.force

    let damp = Math.pow(axe.damping, dt)
    let deltaY = 
      throwInfo.force / ((axe.mass * game.physics.gravity) * 0.5 * dt) * dt

    deltaY *= damp * 0.85

    impactMarker.position.x = 
      throwInfo.origin.x + (throwInfo.impactPosition.x * deltaY)

    impactMarker.position.z = 
      throwInfo.origin.z + (throwInfo.impactPosition.z * deltaY)
  }

  function shootAxe() {
    axe.active = true
    axe.setVisible(true)
    axe.setOpacity(1)

    axe.position.copy(throwInfo.origin)
    axe.velocity.copy(throwInfo.impactPosition)

    impactMarker.setOpacity(0)
    shadowBlob.setVisible(true)

    isAccumulatingForce = false
    throwInfo.accumulatedForce = 0
  }

  // Notes:
  // 0 is bottom,
  // 1 is right
  // -1 is left
  // 2 is top
  function showAxeHitEffect(position) {
    if (position === 1 || position === -1) {
      let rz = 0
      switch(position) {
        case 1: {
            rz = 90
        } break

        case -1: {
            rz = -90
        } break
      }
      hit.root.transform.rotation.z = rz
      hit.root.transform.rotation.y = 0
      hit.root.transform.rotation.x = Math.random() * 360
    } else {
      hit.root.transform.rotation.y = Math.random() * 360
      hit.root.transform.rotation.x = (position === 0? 0 : 90)
      hit.root.transform.rotation.z = 0
    }

    // This will add a small offset from the wall 
    // so that it won't z-fight it
    hit.position.x = 
      (position === 0 || position === 2)
        ? axe.position.x 
        : ( 
            (position === 1)
            ? corridor.halfWidth - 1 
            : (-corridor.halfWidth) + 1
          )

    hit.position.y = 
      position !== 0? axe.position.y : (-game.scene.corridorElevation)

    hit.position.z = axe.position.z

    hit.setVisible(true)
    hit.setOpacity(0.65)
  }

  function showCharHitEffect() {
    charHit.active = true
    charHit.setVisible(true)
    charHit.setOpacity(0.8)
    charHit.position.copy(axe.position)
  }

  let axeToCam = 0
  function updateAxe(dt) {
    if (game.paused) return
    let damp = Math.pow(axe.damping, dt)

    axe.velocity.x *= damp
    axe.velocity.z *= damp

    let axeVelocityLength = 
      maths.clamp(Math.abs(axe.velocity.length()), 0, 800)

    axe.rotation.z += 
      (!game.physics.wind?Math.sign(axe.velocity.x):1) 
      * (Math.abs(axeVelocityLength*throwInfo.force*0.0023) * dt)

    if (axe.rotation.z > 359) {
      axe.rotation.z = 0
    } else if (axe.rotation.z < 1) {
      axe.rotation.z = 359
    }

    if (axeVelocityLength > 500) {
      axeToCam = 
        (Math.abs(axe.position.z-((game.scene.characterSeparation/2) 
                                  * camSide)))*0.001
      playSound(
          'axeThrow',
          1 - maths.clamp(axeToCam, 0, 1),
          true,
          800-(axeVelocityLength*0.86)
      )
    }

    axe.velocity.y += (axe.mass * game.physics.gravity) * dt

    // Main position update.
    axe.velocity.x += (game.physics.wind?400.0:0.0) * dt

    axe.position.x += axe.velocity.x * dt
    axe.position.y += axe.velocity.y * dt
    axe.position.z += axe.velocity.z * dt

    axe.scale.x = camSide

    checkAxeCollisions(dt)
  }

  function checkAxeCollisions(dt) {
    let axeTop = axe.getBoundsTop()
    let axeBottom = axe.getBoundsBottom()

    let axeFront = axe.getBoundsFront()
    let axeBack = axe.getBoundsBack()

    let axeRight = axe.getBoundsRight()
    let axeLeft = axe.getBoundsLeft()

    let floor = -game.scene.corridorElevation - 1
    let hasTouchedFloor = axeBottom >= floor

    // how far will the axe fly until it gets pooled.
    let killDistance = corridor.length * 0.4 

    let hitSide = 0xff // what side did it overlap
    let axeVelocityLength = 
      maths.clamp(Math.abs(axe.velocity.length()), 0, 800)

    if (axeRight >= corridor.halfWidth) {
      // This position.x -= 1 doesn't seem much, but it will prevent the axe
      // of getting stuck on the wall
      axe.position.x -= 1
      axe.velocity.z *= 0.95
      axe.velocity.x *= -1
      hitSide = 1
    }

    if (axeLeft <= -corridor.halfWidth) {
      axe.position.x += 1
      axe.velocity.z *= 0.95
      axe.velocity.x *= -1
      hitSide = -1
    }

    // It seems that the corridor top is actuall -600... 
    // better change that soon!
    if (axeTop < -600) {
      axe.position.y += 1
      axe.velocity.y *= -1
      hitSide = 2
    }

    if (hasTouchedFloor) {
      axe.position.y = floor-axe.getBoundsDepth()
      axe.velocity.y *= -axe.bounciness
      hitSide = 0
    }

    if (hitSide !== 0xff && axeVelocityLength >= 400) {
      playSound(
        game.sounds.hitFloor[(Math.random()*4)|0],
        1 - Math.abs(axeToCam + axeVelocityLength * 0.00002),
        true
      )

      showAxeHitEffect(hitSide)
      hitSide = 0xff
    }

    if (axe.position.z > killDistance || axe.position.z < -killDistance) {
      if (axe.active) {
        killAxe()
        isAiming = true
      }
    }

    if (axeVelocityLength <= 250) {
      axe.mesh.style.opacity -= 2 * dt

      if (axe.mesh.style.opacity <= 0) {
        killAxe()
        isAiming=true
      }
    }
  }

  function killAxe() {
    axe.active = false
    axe.setVisible(false)

    axe.position.set()
    axe.velocity.set()

    impactMarker.setOpacity(0)
    shadowBlob.setVisible(false)
    hit.setVisible(false)
    hit.setOpacity(0)

    isAccumulatingForce = false

    throwInfo.origin.set()
    throwInfo.force = 0
    throwInfo.impactPosition.set()

    //TESTING
    //if (game.mode === GAME_MODE_SINGLE) {
      //if (red.active) {
        //switchTurns()
      //}
    //} else {
      //switchTurns()
    //}
    switchTurns()
  }


  //
  // Axe/Character collision detection
  //

  function collidedWithAxe(char) {
    if (axe.position.z >= char.getBoundsFront() &&
      axe.position.z <= char.getBoundsBack() &&
      axe.position.x >= char.getBoundsLeft() &&
      axe.position.x <= char.getBoundsRight() &&
      axe.position.y >= char.getBoundsTop())
    {
      return true
    }

    return false
  }


  //
  // Arrow/aiming.
  //

  function adjustArrowDirection(base, animDirection) {
    arrow.rotation.y = base
    arrow.animDir = blue.position.x >= red.position.x? 1 : -1
  }

  function getArrowAimingSide() {
    let theta = arrow.rotation.y
    return (theta <= 0 && theta >= -180) ? 1 : -1
  }

  function animateArrow(dt) {
    let arrowY = -game.scene.corridorElevation-1

    if (game.turn === GAME_TURN_BLUE) {
      let arrowZ = blue.position.z - (blue.bounds.z * 0.5)

      arrow.position.set(blue.position.x, arrowY, arrowZ)

      if (arrow.rotation.y > game.arrowAim.maxAngle ||
        arrow.rotation.y <= -game.arrowAim.maxAngle) {
        arrow.animDir *= -1
      }
    } else {
      let arrowZ = red.position.z + (red.bounds.z * 0.5)

      arrow.position.set(red.position.x, arrowY, arrowZ)

      if (arrow.rotation.y > -180 + game.arrowAim.maxAngle ||
        arrow.rotation.y <= -180 - game.arrowAim.maxAngle) {
        arrow.animDir *= -1
      }
    }

    arrow.rotation.y += arrow.animSpeed * arrow.animDir * dt
    arrow.direction = -90 - arrow.rotation.y
    arrow.update()
  }


  //
  // General.
  //

  function updateEntities() {
    axe.update()

    blue.update()
    red.update()

    blueShadowBlob.update()
    redShadowBlob.update()

    impactMarker.update()
    shadowBlob.update()

    hit.update()
    charHit.update()
  }

  //
  // Sound and music.
  //

  let playLockQueue = []
  let audioTimer = null
  function playSound(name, volume, rightaway, interval, delay) {
    volume = volume || 0
    rightaway = rightaway || false
    interval = interval || 0

    let sound = game.sounds[name]
    sound.volume = maths.clamp(volume, 0, 1)

    let isAudioLocked = playLockQueue.indexOf(name) !== -1

    if (interval > 0 && !isAudioLocked) {
      playLockQueue.push(name)
      audioTimer = setTimeout(function(){
        playLockQueue.splice(playLockQueue.indexOf(name), 1)
      }, interval)
    }

    if (!isAudioLocked) {
      if (rightaway) {
        sound.currentTime = 0
      }
      if (delay != null) {
        audioTimer = setTimout(function() {
          sound.play()
        }, delay)
      } else {
        sound.play()
      }
    }
  }


  //
  // Camera.
  //

  function spinCamera(dt) {
    if (game.view.enableAimFocus) {
      camera.transform.rotation.y = maths.lerp(
        camera.transform.rotation.y,
        game.view.pitch,
        game.view.focusAnimSpeed * dt
      )
    }
  }

  let zoom = game.view.zoom
  let cameraY = camera.transform.position.y
  function updateCamera(dt) {
    if (!game.debugCamera) {
      if (game.view.enableAimFocus) {
        if (game.turn === GAME_TURN_BLUE 
          && camera.transform.rotation.y > 0) 
        {
          camera.transform.rotation.y = maths.fastLerp(
            camera.transform.rotation.y,
            0,
            game.view.focusAnimSpeed * dt
          )
        }

        if (game.turn === GAME_TURN_RED 
          && camera.transform.rotation.y < 180) 
        {
          camera.transform.rotation.y = maths.fastLerp(
            camera.transform.rotation.y,
            180,
            game.view.focusAnimSpeed * dt
          )
        }
      }

      if (shakeCamera) {
        camera.transform.position.x = (Math.random()-0.5)*80
        camera.transform.position.y = (Math.random()-0.5)*-50

        setTimeout(() => {
          camera.transform.position.x = 0
          camera.transform.position.y = 0
          shakeCamera = false
        }, 100)
      }
    }

    // Some controls that are somewhat useful for debugging.
    if (game.debugCamera) {
      if (input.getKey(input.keys.d)) {
        camera.applyRotation(0, game.view.turnSpeed * -dt, 0)
      }

      if (input.getKey(input.keys.a)) {
        camera.applyRotation(0, game.view.turnSpeed * dt, 0)
      }

      if (input.getKey(input.keys.w)) {
        camera.applyRotation(game.view.turnSpeed * -dt, 0, 0)
      }

      if (input.getKey(input.keys.s)) {
        camera.applyRotation(game.view.turnSpeed * dt, 0, 0)
      }

      if (input.getKey(input.keys.one)) {
        zoom -= 0.6 * dt
        camera.zoom(zoom)
      }

      if (input.getKey(input.keys.two)) {
        zoom += 0.6 * dt
        camera.zoom(zoom)
      }

      if (input.getKey(input.keys.four)) {
        camera.setPerspective(game.view.perspective)
      }

      if (input.getKey(input.keys.five)) {
        camera.setPerspective(9999)
      }

      // Reset view
      if (input.getKey(input.keys.three)) {
        camera.setRotation(camera.transform.rotation.x, 0, 0)
        camera.setPerspective(game.view.perspective)
        zoom = game.view.zoom
        camera.zoom(zoom)
      }
    }
  }

  game.finish = function() {
    /* Destroy everything here! */
    throwInfo.accumulatedForce = 0
    throwInfo.origin.set()
    throwInfo.angle = 0
    throwInfo.accumulatepdForce = 0
    throwInfo.force = 0
    throwInfo.impactPosition.set()

    canShoot = false
    isAIWaiting = false

    screenFlash.style.visibility = 'hidden'

    game.paused = false

    world.destroy()
    gui.destroy()
  };

  return game
}(
  window.utopy.maths,
  window.utopy.assets,
  window.utopy.shared,
  window.utopy.utils,
  window.utopy.input,
  window.utopy.graphics,
  window.utopy.world,
  window.utopy.camera,
  window.utopy.objects,
  window.utopy.gui,
  window.utopy.timer
))

},{}],12:[function(require,module,exports){
'use strict';

let shared = {
  colors: {
    transparent: 'rgba(0, 0, 0, 0)',
    background: '#120120', 
    
    player: '#0ec7ff',
    enemy: '#F11D9C',
    
    blue: '#0ec7ff',
    red: '#F11D9C',
    bullet: '#4D4D4D',
    platform: '#f0f0f0'
  },
  
  // single or multi
  selectedGameMode: 'single',
  //selectedGameMode: 'multi',
  
  selectedChar1: 'guard1',
  selectedChar2: 'goblin1',
  selectedCorridor: 'corridorHumans',
  
  gameScore: 3,
  hiScore: 0,
  
  blueActionKey: 32,
  redActionKey: 32,
}

module.exports = shared

},{}],13:[function(require,module,exports){
'use strict';

const l = console.log

module.exports = (function(utopy, input, graphics, assets, world, objects, camera, maths, shared, gui) 
{
  const charselect = {};
  
  charselect.meshes = {
    charFrame1: graphics.createFace(256, 256, assets.textures.charFrame),
    charSel1: graphics.createFace(96, 96, assets.textures.placeholderChar),
    btnArrow: graphics.createFace(80, 80, assets.textures.btnArrow),
    btnForward: graphics.createFace(80, 80, assets.textures.btnForward),
    btnBack: graphics.createFace(80, 80, assets.textures.btnBack),
    background: graphics.createFace(128, 128, assets.textures.menuBackground)
  };
  
  let bg;
  let charOne, selChar1
  let charFrame1, charFrame1Left, charFrame1Right
  
  let btnPlay, btnBack, c1
          
  charselect.init = function(init) {
    camera.setRotation(0, 0, 0);
    camera.setPosition(0, 0, 0);
    camera.zoom(1);
    
    graphics.setBackgroundColor('black');
    
    bg = new objects.GameObject({
      faces: charselect.meshes.background, 
      position: new maths.Vector3(), 
      scale: new maths.Vector3(6, 8, 0)
    })
    world.add(bg)
    
    charFrame1 = new objects.GameObject({
      faces: charselect.meshes.charFrame1,
      position: new maths.Vector3(0, 0, 1),
      rotation: new maths.Vector3(0, 0, -5)
    })
    
    charFrame1Left = new objects.GameObject({
      faces: charselect.meshes.btnArrow,
      position: new maths.Vector3(-115, 0, 10),
      rotation: new maths.Vector3(0, 0, 0),
      scale: new maths.Vector3(-1, 1, 1)
    })
    
    charFrame1Right = new objects.GameObject({
      faces: charselect.meshes.btnArrow,
      position: new maths.Vector3(115, 0, 10),
      rotation: new maths.Vector3(0, 0, 0)
    })
    
    
    charFrame1Left.mesh.onclick = handleFrame1Left;
    charFrame1Right.mesh.onclick = handleFrame1Right;
    
    let buttonsLeft = [
      charFrame1Left
    ];
    
    btnPlay = new objects.GameObject({
      faces: charselect.meshes.btnForward,
      position: new maths.Vector3(185, 320, 10),
      scale: new maths.Vector3(1, 1, 1) 
    })
  
    btnPlay.mesh.onclick = (e) => {
      //utopy.switchState('corridorselectionstate', { mode: 'single' })
      //utopy.switchState('playstate', { mode: 'single' })
      //shared.selectedGameMode = 'single'
      utopy.switchState('playstate')
    }
    
    btnBack = new objects.GameObject({
     faces: charselect.meshes.btnBack,
      position: new maths.Vector3(-190, 320, 10),
    });
    
    btnBack.mesh.onclick = (e) => {
      utopy.switchState('menustate') 
    }
    
    let buttonsRight = [
      charFrame1Right,
      btnPlay,
      btnBack
    ];
    
    for (let i = 0; i < buttonsLeft.length; i++) {
      buttonsLeft[i].mesh.onmouseenter = function() {
        buttonsLeft[i].scale.set(-1.3, 1.3, 1.3);
      };
      
      buttonsLeft[i].mesh.onmouseleave = function() {
        buttonsLeft[i].scale.set(-1, 1, 1);
      };
      
      buttonsLeft[i].mesh.onmousedown = function() {
        buttonsLeft[i].scale.set(-1, 1, 1);
      };
      
      buttonsLeft[i].mesh.onmouseup = function() {
        buttonsLeft[i].scale.set(-1.3, 1.3, 1.3);
      };
    }
    
    for (let i = 0; i < buttonsRight.length; i++) {
      buttonsRight[i].mesh.onmouseenter = function() {
        buttonsRight[i].scale.set(1.3, 1.3, 1.3);
      };
      
      buttonsRight[i].mesh.onmouseleave = function() {
        buttonsRight[i].scale.set(1, 1, 1);
      };
      
      buttonsRight[i].mesh.onmousedown = function() {
        buttonsRight[i].scale.set(1, 1, 1);
      };
      
      buttonsRight[i].mesh.onmouseup = function() {
        buttonsRight[i].scale.set(1.3, 1.3, 1.3);
      };
    }
    
    let labelCharSelect = gui.createLabel('Select your character')
    labelCharSelect.style.transform = 'translateX(200px) translateY(130px) translateZ(100px)'
    labelCharSelect.style.top = '0%'
    labelCharSelect.classList.add('text-score')
    labelCharSelect.style.width = '400px'
    labelCharSelect.style.fontSize = '30px'
    
    world.add(charFrame1);
    
    world.add(charFrame1Left);
    world.add(charFrame1Right);
  
    world.add(btnPlay)
    world.add(btnBack)
    
    selChar1 = new objects.GameObject({
      faces: charselect.meshes.charSel1,
      position: new maths.Vector3(0, 0, 10),
      rotation: new maths.Vector3(0, 0, 0)
    });
    
    world.add(selChar1);
    
    graphics.setFaceTexture(selChar1.mesh.childNodes[0], assets.textures.guard1);
    
    c1=0
  };
  
  let angle = 0.0;
  charselect.update = function(dt) {
    angle += dt;
    
    if (angle >= 360) angle -= 360;
    
    charFrame1Left.update();
    charFrame1Right.update();
    btnPlay.update()
    btnBack.update()
  };
  
  const chars = [
    'guard1',
    'guard2',
    'king',
    'goblin1',
    'goblin2',
    'goblinKing',
    'barbarian1',
    'barbarian2',
    'barbarianKing',
    'security1',
    'security2',
    'president'
  ]
  
  
  function handleFrame1Left() {
    c1--;
    if (c1 < 0) c1 = 11
    graphics.setFaceTexture(selChar1.mesh.childNodes[0], assets.textures[chars[c1]])
  }
  
  function handleFrame1Right() {
    c1++;
    if (c1 > 11) c1 = 0
    graphics.setFaceTexture(selChar1.mesh.childNodes[0], assets.textures[chars[c1]])
  }
  
  charselect.finish = function() {
    world.destroy()
    shared.selectedChar1 = chars[c1]
    shared.selectedChar2 = chars[(c1+1+(+(Math.random()*4)|0))%(chars.length-1)]
    shared.gameScore = 1000
    gui.destroy()
  };
  
  return charselect
}(
  window.utopy, 
  window.utopy.input, 
  window.utopy.graphics,
  window.utopy.assets,
  window.utopy.world,
  window.utopy.objects,
  window.utopy.camera,
  window.utopy.maths,
  window.utopy.shared,
  window.utopy.gui
));

},{}],14:[function(require,module,exports){

module.exports = (function() {
  let timer = {
    timers: []
  }
  
  timer.create = (a) => {
    let t = {
      duration: a.duration || 1.0,
      countDown: a.countDown || false,
      time: a.countDown || false ? a.duration : 0, // the core
      onCompleted: a.onCompleted || undefined,
      isComplete: false,
      isRunning: false,
      once: a.once !== undefined ? a.once : false
    }
    
    timer.timers.push(t)
    
    return t
  }
  
  timer.start = t => {
    t.isComplete = false
    t.isRunning = true
  }
  
  timer.reset = t => {
    if (t.countDown) {
      t.time = t.duration + .5
    } else {
      t.time = -.5
    }
    
    t.isComplete = false
    t.isRunning = true
  }

  timer.stopAll = () => {
    let i = timer.timers.length
    while(i--) {
      timer.timers[i].isRunning = false
    }
  }
  
  timer.destroy = t => {
    timer.timers.splice(timer.timers.indexOf(t), 1)
  }
  
  timer.destroyAll = () => {
    let i = timer.timers.length
    while(i--) {
      delete timer.timers[i] 
    }
  }
  
  timer.update = dt => {
    let i = timer.timers.length
    while(i--) {
      let t = timer.timers[i]

      if (t.isRunning && !t.isComplete) {
        if (t.countDown) {
          t.time -= dt
        } else {
          t.time += dt
        }
      }
      
      if (t.countDown ? Math.ceil(t.time-0.5) <= 0 : Math.floor(t.time+0.5) >= t.duration) {
        if (t.onCompleted !== undefined)
          t.onCompleted()
        
        t.isRunning = false
        t.isComplete = true
      }
    }  
  } 
  
  return timer
}())

},{}],15:[function(require,module,exports){
'use strict';

module.exports = (function() {
    
    const utils = {};
    
    utils.hexToRGB = function(hex) {
        hex = hex.replace(/^#/, '');
        let rr, gg, bb;
        
        if (hex.length === 3) {
            rr = parseInt(hex[0], 16);
            gg = parseInt(hex[1], 16);
            bb = parseInt(hex[2], 16);
        } else {
            rr = parseInt(hex.slice(0, 2), 16);
            gg = parseInt(hex.slice(2, 4), 16);
            bb = parseInt(hex.slice(4, 6), 16);
        }
        
        return {
            r: rr, 
            g: gg, 
            b: bb
        };
    };
    
    let numPattern = /[0-9]+/g;
    utils.cssColorToRGBA = function(color) {
        let rr, gg, bb, aa;
        if (color.startsWith('rgba')) {
            let rgba = color.match(numPattern);
            rr = rgba[0] || 0;
            gg = rgba[1] || 0;
            bb = rgba[2] || 0;
            aa = rgba[3] || 1;
        } else if (color.startsWith('rgb')) {
            let rgb = color.match(numPattern);
            rr = rgb[0] || 0;
            gg = rgb[1] || 0;
            bb = rgb[2] || 0;
            aa = 1;
        }
        
        return {
            r: parseInt(rr),
            g: parseInt(gg),
            b: parseInt(bb),
            a: parseInt(aa)
        };
    };
    
    return utils;
    
}());

},{}],16:[function(require,module,exports){
'use strict' 

module.exports = (function() {
  window.utopy = {}
  const utopy = window.utopy
  
  utopy.mainContainer = document.getElementById('utopy')
  
  utopy.shared = require('./shared.js')
  utopy.timer = require('./timer.js')
  utopy.maths = require('./maths.js')
  utopy.utils = require('./utils.js') 
  utopy.assets = require('./assets.js') 
  utopy.gui = require('./gui.js')
  utopy.input = require('./input.js') 
  utopy.camera = require('./camera.js') 
  utopy.objects = require('./objects.js') 
  utopy.world = require('./world.js') 
  utopy.graphics = require('./graphics.js') 
  
  /* Next time I'll make Node responsible for this... */
  utopy.states = {
    menustate: require('./menustate.js'),
    playstate: require('./playstate.js'),
    singlecharselectstate: require('./singlecharselectstate.js'),
    charselectstate: require('./charselectstate.js'),
    corridorselectionstate: require('./corridorselectionstate.js')
  }
  
  // Set initial state
  //utopy.currentState = utopy.states.menustate 
  //utopy.currentState = utopy.states.corridorselectionstate 
  //utopy.currentState = utopy.states.singlecharselectstate 
  //utopy.currentState = utopy.states.charselectstate 
  utopy.currentState = utopy.states.menustate
  
  utopy.switchState = function(state, init) {
    if (utopy.currentState !== undefined) {
      utopy.currentState.finish() 
      
      if (typeof(state) === 'string') {
        utopy.currentState = utopy.states[state] 
      } else if (typeof(state) === 'object') {
        utopy.currentState = state 
      } else {
        console.error('Could not load state: ' + state) 
        return 
      }
      
      utopy.currentState.init(init || {}) 
    }
  } 
  
  utopy.init = function() {
    // Game Initialization
    utopy.currentState.init() 
    
    utopy.camera.transform.update() 
    window.requestAnimationFrame(utopy.tick) 
  } 
  
  
  // Our game simulation properties.
  // Actually, 'frames per second' is wrong, the correct 
  // 'simulation steps'.
  utopy.shared.simulation = {
    timestamp: 0,
    fps: 60,
    timeScale: 1.0,
    frameStep: 0
  }
  
  let previous = performance.now(),
    msElapsed = 0,
    lag = 0,
    frames = 0,
    fpsTime = 0 
      
  utopy.shared.simulation.frameStep = 1.0 / utopy.shared.simulation.fps 
  
  utopy.tick = function(timestamp) {
    window.requestAnimationFrame(utopy.tick) 
    
    utopy.shared.simulation.timestamp = timestamp 

    let now = timestamp 
    let elapsed = (now - previous) * 1e-3
    previous = now 
    
    if (elapsed >= utopy.shared.simulation.frameStep)
      elapsed = utopy.shared.simulation.frameStep 
    
    lag += elapsed 
    
    while (lag >= utopy.shared.simulation.frameStep) {
      utopy.currentState.update(utopy.shared.simulation.frameStep * utopy.shared.simulation.timeScale) 
      utopy.camera.update(utopy.shared.simulation.frameStep * utopy.shared.simulation.timeScale) 
      utopy.timer.update(utopy.shared.simulation.frameStep * utopy.shared.simulation.timeScale)
      lag -= utopy.shared.simulation.frameStep 
    }
    
    utopy.input.finish() 
  } 
  
  utopy.init() 
}()) 





},{"./assets.js":1,"./camera.js":2,"./charselectstate.js":3,"./corridorselectionstate.js":4,"./graphics.js":5,"./gui.js":6,"./input.js":7,"./maths.js":8,"./menustate.js":9,"./objects.js":10,"./playstate.js":11,"./shared.js":12,"./singlecharselectstate.js":13,"./timer.js":14,"./utils.js":15,"./world.js":17}],17:[function(require,module,exports){
'use strict';

/*
 * NOTE: Two modules operate on the 'world' element.
 * The camera will handle movement and this one will handle
 * children assemblies.
 */
 
module.exports = (function(objects) {
    
    const world = {};
    /*
    world.element = document.createElement('world');
    world.element.style.id = 'world';
    utopy.mainContainer.appendChild(world.element);*/
    
    world.element = document.getElementById('world');
    
    world.objects = [];
    
    world.add = function(object) {
        world.objects.push(object);
        world.element.appendChild(object.root);
    };
    
    world.getById = function(id) {
        let i = world.objects.length;
        while(i--) {
            if (world.objects[i].id === id) {
                return world.objects[i];
            }
        }
        return null;
    };
    
    world.remove = function(id) {
        let object = world.getById(id);
        if (typeof(object) === "object") {
            object.destroy();
            world.objects.splice(world.objects.indexOf(object), 1);
        }
    };
    
    world.destroy = function() {
        let i = world.objects.length;
        while(i--) {
            let object = world.objects[i];
            
            if (object instanceof objects.GameObject) {
                object.destroy();
            } else {
                object.remove();
            }
        }
        
        world.objects = [];
    };
    
    return world;
    
}(window.utopy.objects));

},{}]},{},[16])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2ZveHRlcm0vQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwianMvYXNzZXRzLmpzIiwianMvY2FtZXJhLmpzIiwianMvY2hhcnNlbGVjdHN0YXRlLmpzIiwianMvY29ycmlkb3JzZWxlY3Rpb25zdGF0ZS5qcyIsImpzL2dyYXBoaWNzLmpzIiwianMvZ3VpLmpzIiwianMvaW5wdXQuanMiLCJqcy9tYXRocy5qcyIsImpzL21lbnVzdGF0ZS5qcyIsImpzL29iamVjdHMuanMiLCJqcy9wbGF5c3RhdGUuanMiLCJqcy9zaGFyZWQuanMiLCJqcy9zaW5nbGVjaGFyc2VsZWN0c3RhdGUuanMiLCJqcy90aW1lci5qcyIsImpzL3V0aWxzLmpzIiwianMvdXRvcHkuanMiLCJqcy93b3JsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdlhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbHpEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDek5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKiBcclxuICogTmV4dCB0aW1lIEknbGwgbGVhdmUgdGhpcyBkaXJ0eSBqb2IgZm9yIE5vZGUuXHJcbiAqL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBcclxuICBjb25zdCBhc3NldHMgPSB7fVxyXG4gIFxyXG4gIGNvbnN0IGltZ3MgPSAnYXNzZXRzL2ltYWdlcy8nXHJcbiAgY29uc3QgcGF0aHMgPSB7XHJcbiAgICBjaGFyczogaW1ncysnY2hhcmFjdGVycy8nLFxyXG4gICAgY29ycmlkb3JzOiBpbWdzKydjb3JyaWRvcnMvJyxcclxuICAgIGNvcnJpZG9yRmxvb3I6IGltZ3MrJ2NvcnJpZG9ycy9jb3JyaWRvckh1bWFucy9mbG9vci5wbmcnLFxyXG4gICAgY29ycmlkb3JSb29mOiBpbWdzKydjb3JyaWRvcnMvY29ycmlkb3JIdW1hbnMvcm9vZi5wbmcnLFxyXG4gICAgY29ycmlkb3JXYWxsOiBpbWdzKydjb3JyaWRvcnMvY29ycmlkb3JIdW1hbnMvd2FsbC5wbmcnLFxyXG4gICAgY29ycmlkb3JTdGF0dWU6IGltZ3MrJ2NvcnJpZG9ycy9jb3JyaWRvckh1bWFucy9zdGF0dWUucG5nJyxcclxuICB9XHJcbiAgXHJcbiAgYXNzZXRzLmN1YmVtYXBzID0ge1xyXG4gICAgZ3Jhc3M6IHtcclxuICAgICAgJ3RvcCc6IHsgXHJcbiAgICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy9ncmFzcy5wbmcnLCBpbWFnZVJlbmRlcmluZzogJ3BpeGVsYXRlZCcgXHJcbiAgICAgIH0sXHJcbiAgICAgICdzaWRlcycgOiB7IFxyXG4gICAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvZ3Jhc3Mtc2lkZS5wbmcnLCBpbWFnZVJlbmRlcmluZzogJ3BpeGVsYXRlZCcgXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICBjcmF0ZToge1xyXG4gICAgICAnYWxsJzogeyBcclxuICAgICAgICBzcmM6ICdhc3NldHMvaW1hZ2VzL2NyYXRlLnBuZycsIGltYWdlUmVuZGVyaW5nOiAncGl4ZWxhdGVkJyBcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgYXNzZXRzLnRleHR1cmVzID0ge1xyXG4gICAgYmx1ZVRhZzoge1xyXG4gICAgICBzcmM6ICdhc3NldHMvaW1hZ2VzL2JsdWUtdGFnLnBuZydcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHJlZFRhZzoge1xyXG4gICAgICBzcmM6ICdhc3NldHMvaW1hZ2VzL3JlZC10YWcucG5nJ1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYmx1ZUZsYWc6IHtcclxuICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy9ibHVlLWZsYWcucG5nJ1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcmVkRmxhZzoge1xyXG4gICAgICBzcmM6ICdhc3NldHMvaW1hZ2VzL3JlZC1mbGFnLnBuZydcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGtpbGxzOiB7XHJcbiAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMva2lsbC5wbmcnXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBjb3JyaWRvcjoge1xyXG4gICAgICBmbG9vcjoge1xyXG4gICAgICAgIHNyYzogcGF0aHMuY29ycmlkb3JGbG9vcixcclxuICAgICAgICByZXBlYXQ6IHRydWUsXHJcbiAgICAgICAgc3RyZXRjaFg6IDUxMiwgc3RyZXRjaFk6IDUxMlxyXG4gICAgICB9LFxyXG4gICAgICBcclxuICAgICAgcm9vZjoge1xyXG4gICAgICAgIHNyYzogcGF0aHMuY29ycmlkb3JSb29mLFxyXG4gICAgICAgIHJlcGVhdDogdHJ1ZSxcclxuICAgICAgICBzdHJldGNoWDogNTEyLCBzdHJldGNoWTogNTEyXHJcbiAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgICB3YWxsOiB7XHJcbiAgICAgICAgc3JjOiBwYXRocy5jb3JyaWRvcldhbGwsXHJcbiAgICAgICAgcmVwZWF0OiB0cnVlLFxyXG4gICAgICAgIHN0cmV0Y2hYOiA1MTIsIHN0cmV0Y2hZOiA1MTJcclxuICAgICAgfSxcclxuICAgICAgXHJcbiAgICAgIHN0YXR1ZToge1xyXG4gICAgICAgIHNyYzogcGF0aHMuY29ycmlkb3JTdGF0dWUsXHJcbiAgICAgICAgY3VsbDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8qXHJcbiAgICBjb3JyaWRvckZsb29yOiB7XHJcbiAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvY29ycmlkb3JzL2Nhc3RsZS9mbG9vci5wbmcnLFxyXG4gICAgICByZXBlYXQ6IHRydWUsIFxyXG4gICAgICBzdHJldGNoWDogNTEyLCBzdHJldGNoWTogNTEyIFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgY29ycmlkb3JSb29mOiB7XHJcbiAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvY29ycmlkb3JzL2Nhc3RsZS9yb29mLnBuZycsIFxyXG4gICAgICByZXBlYXQ6IHRydWUsIFxyXG4gICAgICBzdHJldGNoWDogNTEyLCBzdHJldGNoWTogNTEyLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgY2FzdGxlV2FsbDoge1xyXG4gICAgICBzcmM6ICdhc3NldHMvaW1hZ2VzL2NvcnJpZG9ycy9jYXN0bGUvd2FsbC5wbmcnLCBcclxuICAgICAgcmVwZWF0OiB0cnVlLCBcclxuICAgICAgc3RyZXRjaFg6IDUxMiwgc3RyZXRjaFk6IDUxMlxyXG4gICAgfSxcclxuICAgICAgXHJcbiAgICBzdGF0dWU6IHtcclxuICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy9jb3JyaWRvcnMvY2FzdGxlL3N0YXR1ZS5wbmcnLFxyXG4gICAgICBjdWxsOiBmYWxzZVxyXG4gICAgfSwqL1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAvKiBJdGVtcyBhbmQgc3R1ZmYgKi9cclxuICAgIGF4ZTogeyBzcmM6ICdhc3NldHMvaW1hZ2VzL2F4ZXMvYXhlLnBuZycgfSxcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgLyogQ2hhcmFjdGVycyAqL1xyXG4gICAgLy9odW1hbi1ndWFyZHMta2luZ1xyXG4gICAgZ3VhcmQxOiB7IFxyXG4gICAgICBzcmM6IHBhdGhzLmNoYXJzKydndWFyZDEucG5nJ1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ3VhcmQyOiB7IFxyXG4gICAgICBzcmM6IHBhdGhzLmNoYXJzKydndWFyZDIucG5nJ1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAga2luZzoge1xyXG4gICAgICBzcmM6IHBhdGhzLmNoYXJzKydraW5nLnBuZydcclxuICAgIH0sXHJcbiAgICBcclxuICAgXHJcbiAgICAvL2JhcmJhcmlhbnNcclxuICAgIGJhcmJhcmlhbjE6IHsgXHJcbiAgICAgIHNyYzogcGF0aHMuY2hhcnMrJ2JhcmJhcmlhbjEucG5nJ1xyXG4gICAgfSxcclxuXHJcbiAgICBiYXJiYXJpYW4yOiB7IFxyXG4gICAgICBzcmM6IHBhdGhzLmNoYXJzKydiYXJiYXJpYW4yLnBuZydcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJhcmJhcmlhbktpbmc6IHsgXHJcbiAgICAgIHNyYzogcGF0aHMuY2hhcnMrJ2JhcmJhcmlhbi1raW5nLnBuZydcclxuICAgIH0sXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy9nb2JsaW5zIFxyXG4gICAgZ29ibGluMTogeyBcclxuICAgICAgc3JjOiBwYXRocy5jaGFycysnZ29ibGluMS5wbmcnXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBnb2JsaW4yOiB7IFxyXG4gICAgICBzcmM6IHBhdGhzLmNoYXJzKydnb2JsaW4yLnBuZydcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGdvYmxpbktpbmc6IHtcclxuICAgICAgc3JjOiBwYXRocy5jaGFycysnZ29ibGluLWtpbmcucG5nJ1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgXHJcbiAgICAvL2ZlZGVyYWxzLXByZXNpZGVudFxyXG4gICAgc2VjdXJpdHkxOiB7IFxyXG4gICAgICBzcmM6IHBhdGhzLmNoYXJzKydzZWN1cml0eTEucG5nJ1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc2VjdXJpdHkyOiB7IFxyXG4gICAgICBzcmM6IHBhdGhzLmNoYXJzKydzZWN1cml0eTIucG5nJ1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcHJlc2lkZW50OiB7IFxyXG4gICAgICBzcmM6IHBhdGhzLmNoYXJzKydwcmVzaWRlbnQucG5nJ1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgXHJcbiAgICAvKiBGWCAqL1xyXG4gICAgYXJyb3c6IHsgc3JjOiAnYXNzZXRzL2ltYWdlcy9meC9hcnJvdy5wbmcnIH0sXHJcbiAgICBpbXBhY3RNYXJrZXI6IHsgc3JjOiAnYXNzZXRzL2ltYWdlcy9meC9pbXBhY3QtbWFya2VyLnBuZycgfSxcclxuICAgIHNoYWRvd0Jsb2I6IHsgc3JjOiAnYXNzZXRzL2ltYWdlcy9meC9zaGFkb3ctYmxvYi5wbmcnIH0sXHJcbiAgICBoaXQxOiB7IHNyYzogJ2Fzc2V0cy9pbWFnZXMvZngvaGl0MS5wbmcnIH0sXHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgZmFkZURvd246IHtcclxuICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy9meC9mYWRlLWRvd24ucG5nJyxcclxuICAgICAgc3RyZXRjaEFsbDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZmFkZVVwOiB7XHJcbiAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvZngvZmFkZS1kb3duLnBuZycsXHJcbiAgICAgIGZsaXBYOiB0cnVlLFxyXG4gICAgICBzdHJldGNoQWxsOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBsaWdodFJheToge1xyXG4gICAgICBzcmM6ICdhc3NldHMvaW1hZ2VzL2Z4L2xpZ2h0LXJheS5wbmcnLFxyXG4gICAgICBzdHJldGNoQWxsOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB3aGl0ZVBpeGVsOiB7XHJcbiAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvZngvd2hpdGUtcGl4ZWwucG5nJyxcclxuICAgICAgc3RyZXRjaEFsbDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBVSVxyXG4gICAgbWVudUJhY2tncm91bmQ6IHtcclxuICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy9tZW51LWJhY2tncm91bmQucG5nJ1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdHV0b3JpYWw6IHtcclxuICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy90dXRvcmlhbC5wbmcnXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBjb25maWc6IHtcclxuICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy9jb25maWcucG5nJ1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgbWVudUxvZ286IHtcclxuICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy9tZW51LWxvZ28tdGl0bGUucG5nJ1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnRuU2luZ2xlUGxheWVyOiB7XHJcbiAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvbWVudS1idG4tc2luZ2xlLXBsYXllci5wbmcnXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidG5DbG9zZToge1xyXG4gICAgICBzcmM6ICdhc3NldHMvaW1hZ2VzL2J0bkNsb3NlLnBuZydcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ0bk11bHRpUGxheWVyOiB7XHJcbiAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvbWVudS1idG4tbXVsdGktcGxheWVyLnBuZydcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGJ0blF1ZXN0aW9uOiB7XHJcbiAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvYnRuUXVlc3Rpb24ucG5nJ1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnRuQ29uZmlnOiB7XHJcbiAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvYnRuQ29uZmlnLnBuZydcclxuICAgIH0sXHJcblxyXG4gICAgdnM6IHtcclxuICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy92cy5wbmcnXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBjaGFyRnJhbWU6IHtcclxuICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy9jaGFyRnJhbWUucG5nJ1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgY2hhckZyYW1lMjoge1xyXG4gICAgICBzcmM6ICdhc3NldHMvaW1hZ2VzL2NoYXJGcmFtZTIucG5nJ1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYnRuQXJyb3c6IHtcclxuICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy9idG5BcnJvdy5wbmcnXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidG5Gb3J3YXJkOiB7XHJcbiAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvYnRuRm9yd2FyZC5wbmcnXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBidG5QbGF5OiB7XHJcbiAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvYnRuUGxheS5wbmcnXHJcbiAgICB9LFxyXG5cclxuICAgIGJ0bkJhY2s6IHtcclxuICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy9idG5CYWNrLnBuZydcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHBsYWNlaG9sZGVyQ2hhcjoge1xyXG4gICAgICBzcmM6ICdhc3NldHMvaW1hZ2VzL3BsYWNlaG9sZGVyLWNoYXIucG5nJ1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgY29ycmlkb3JIdW1hbnM6IHtcclxuICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy9jYXN0bGUtaHVtYW5zLnBuZydcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGNvcnJpZG9yR29ibGluczoge1xyXG4gICAgICBzcmM6ICdhc3NldHMvaW1hZ2VzL2Nhc3RsZS1nb2JsaW5zLnBuZydcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGNvcnJpZG9yQmFyYmFyaWFuczoge1xyXG4gICAgICBzcmM6ICdhc3NldHMvaW1hZ2VzL2Nhc3RsZS1iYXJiYXJpYW5zLnBuZydcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGNvcnJpZG9yR292ZXJubWVudDoge1xyXG4gICAgICBzcmM6ICdhc3NldHMvaW1hZ2VzL2Nhc3RsZS1nb3Zlcm5tZW50LnBuZydcclxuICAgIH1cclxuICB9O1xyXG4gICAgXHJcbiAgYXNzZXRzLmxvYWRDb3JyaWRvclRleHR1cmVzID0gKHJvb3QpID0+IHtcclxuICAgIHBhdGhzLmNvcnJpZG9yRmxvb3IgPSBwYXRocy5jb3JyaWRvcnMrcm9vdCsnLycrJ2Zsb29yLnBuZydcclxuICAgIHBhdGhzLmNvcnJpZG9yUm9vZiA9IHBhdGhzLmNvcnJpZG9ycytyb290KycvJysncm9vZi5wbmcnXHJcbiAgICBwYXRocy5jb3JyaWRvcldhbGwgPSBwYXRocy5jb3JyaWRvcnMrcm9vdCsnLycrJ3dhbGwucG5nJ1xyXG4gICAgcGF0aHMuY29ycmlkb3JTdGF0dWUgPSBwYXRocy5jb3JyaWRvcnMrcm9vdCsnLycrJ3N0YXR1ZS5wbmcnXHJcbiAgICBcclxuICAgIGFzc2V0cy50ZXh0dXJlcy5jb3JyaWRvci5mbG9vci5zcmMgPSBwYXRocy5jb3JyaWRvckZsb29yXHJcbiAgICBhc3NldHMudGV4dHVyZXMuY29ycmlkb3Iucm9vZi5zcmMgPSBwYXRocy5jb3JyaWRvclJvb2ZcclxuICAgIGFzc2V0cy50ZXh0dXJlcy5jb3JyaWRvci53YWxsLnNyYyA9IHBhdGhzLmNvcnJpZG9yV2FsbFxyXG4gICAgYXNzZXRzLnRleHR1cmVzLmNvcnJpZG9yLnN0YXR1ZS5zcmMgPSBwYXRocy5jb3JyaWRvclN0YXR1ZVxyXG4gIH1cclxuICAgIFxyXG4gIGFzc2V0cy5iYWNrZ3JvdW5kcyA9IHtcclxuICAgIGNhc3RsZTogeyBzcmM6ICdhc3NldHMvaW1hZ2VzL2Nhc3RsZS1iYWNrZ3JvdW5kLnBuZycgfVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gYXNzZXRzXHJcbn0oKSk7XHJcblxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogTk9URTogVGhlcmUncyBubyBzdWNoIHRoaW5nIGFzIGEgY2FtZXJhIGluIHRoaXMgZW5naW5lIHlldCwgXHJcbiAqIGl0IGlzIG9ubHkgdGhlIHdvcmxkIHRoYXQgZ2V0cyByb3RhdGVkIGFuZCBtb3ZlZCBhcm91bmQuXHJcbiAqL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24obWF0aHMsIHdvcmxkKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNhbWVyYSA9IHtcclxuICAgICAgICBwZXJzcGVjdGl2ZTogNjAwXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjYW1lcmEuZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3JsZCcpO1xyXG4gICAgY2FtZXJhLnRyYW5zZm9ybSA9IG5ldyBtYXRocy5UcmFuc2Zvcm0oKTtcclxuICAgIGNhbWVyYS50cmFuc2Zvcm0uYmluZEVsZW1lbnQoY2FtZXJhLmVsZW1lbnQpO1xyXG4gICAgXHJcbiAgICBjYW1lcmEuZWxlbWVudC5zdHlsZS53aWxsQ2hhbmdlID0gJ3RyYW5zZm9ybSc7XHJcbiAgICBcclxuICAgIGNhbWVyYS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKHgsIHksIHopIHtcclxuICAgICAgICBjYW1lcmEudHJhbnNmb3JtLnBvc2l0aW9uLnNldCh4LCB5LCB6KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNhbWVyYS5zZXRSb3RhdGlvbiA9IGZ1bmN0aW9uKHgsIHksIHopIHtcclxuICAgICAgICBjYW1lcmEudHJhbnNmb3JtLnJvdGF0aW9uLnNldCh4LCB5LCB6KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNhbWVyYS5hcHBseVJvdGF0aW9uID0gZnVuY3Rpb24oeCwgeSwgeikge1xyXG4gICAgICAgIGNhbWVyYS50cmFuc2Zvcm0ucm90YXRpb24uYWRkKHgsIHksIHopO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY2FtZXJhLnNldFNjYWxlID0gZnVuY3Rpb24oeCwgeSwgeikge1xyXG4gICAgICAgIGNhbWVyYS50cmFuc2Zvcm0uc2NhbGUuc2V0KHgsIHksIHopO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY2FtZXJhLnpvb20gPSBmdW5jdGlvbih6b29tKSB7XHJcbiAgICAgICAgY2FtZXJhLmVsZW1lbnQuc3R5bGUuem9vbSA9IHpvb207XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjYW1lcmEuc2V0UGVyc3BlY3RpdmUgPSBmdW5jdGlvbihwZXJzcGVjdGl2ZSwgb3JpZ2luKSB7XHJcbiAgICAgICAgd2luZG93LnV0b3B5Lm1haW5Db250YWluZXIuc3R5bGUucGVyc3BlY3RpdmUgPSBcclxuICAgICAgICAgIHBlcnNwZWN0aXZlICsgJ3B4JyB8fCAnMTYwMHB4JztcclxuXHJcbiAgICAgICAgd2luZG93LnV0b3B5Lm1haW5Db250YWluZXIuc3R5bGUucGVyc3BlY3RpdmVPcmlnaW4gPSBcclxuICAgICAgICAgIG9yaWdpbiB8fCAnY2VudGVyIGNlbnRlcic7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjYW1lcmEudXBkYXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2FtZXJhLnRyYW5zZm9ybS5sYXp5VXBkYXRlKCk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybiBjYW1lcmE7XHJcbiAgICBcclxufShcclxuICAgIHdpbmRvdy51dG9weS5tYXRoc1xyXG4pKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgbCA9IGNvbnNvbGUubG9nXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbih1dG9weSwgaW5wdXQsIGdyYXBoaWNzLCBhc3NldHMsIHdvcmxkLCBvYmplY3RzLCBcclxuICBjYW1lcmEsIG1hdGhzLCBzaGFyZWQpIFxyXG57XHJcbiAgY29uc3QgY2hhcnNlbGVjdCA9IHt9O1xyXG4gIFxyXG4gIGNoYXJzZWxlY3QubWVzaGVzID0ge1xyXG4gICAgdnM6IGdyYXBoaWNzLmNyZWF0ZUZhY2UoMTI4LCAxMjgsIGFzc2V0cy50ZXh0dXJlcy52cyksXHJcbiAgICBjaGFyRnJhbWUxOiBncmFwaGljcy5jcmVhdGVGYWNlKDI1NiwgMjU2LCBhc3NldHMudGV4dHVyZXMuY2hhckZyYW1lKSxcclxuICAgIGNoYXJTZWwxOiBncmFwaGljcy5jcmVhdGVGYWNlKDk2LCA5NiwgYXNzZXRzLnRleHR1cmVzLnBsYWNlaG9sZGVyQ2hhciksXHJcbiAgICBjaGFyRnJhbWUyOiBncmFwaGljcy5jcmVhdGVGYWNlKDI1NiwgMjU2LCBhc3NldHMudGV4dHVyZXMuY2hhckZyYW1lKSxcclxuICAgIGNoYXJTZWwyOiBncmFwaGljcy5jcmVhdGVGYWNlKDk2LCA5NiwgYXNzZXRzLnRleHR1cmVzLnBsYWNlaG9sZGVyQ2hhciksXHJcbiAgICBidG5BcnJvdzogZ3JhcGhpY3MuY3JlYXRlRmFjZSg4MCwgODAsIGFzc2V0cy50ZXh0dXJlcy5idG5BcnJvdyksXHJcbiAgICBidG5Gb3J3YXJkOiBncmFwaGljcy5jcmVhdGVGYWNlKDgwLCA4MCwgYXNzZXRzLnRleHR1cmVzLmJ0bkZvcndhcmQpLFxyXG4gICAgYnRuQmFjazogZ3JhcGhpY3MuY3JlYXRlRmFjZSg4MCwgODAsIGFzc2V0cy50ZXh0dXJlcy5idG5CYWNrKSxcclxuICAgIGJhY2tncm91bmQ6IGdyYXBoaWNzLmNyZWF0ZUZhY2UoMTI4LCAxMjgsIFxyXG4gICAgICBhc3NldHMudGV4dHVyZXMubWVudUJhY2tncm91bmRcclxuICAgICksXHJcbiAgICBibHVlRmxhZzogZ3JhcGhpY3MuY3JlYXRlRmFjZSg2NCwgNjQsIGFzc2V0cy50ZXh0dXJlcy5ibHVlRmxhZyksXHJcbiAgICByZWRGbGFnOiBncmFwaGljcy5jcmVhdGVGYWNlKDY0LCA2NCwgYXNzZXRzLnRleHR1cmVzLnJlZEZsYWcpXHJcbiAgfTtcclxuICBcclxuICBsZXQgYmc7XHJcbiAgbGV0IGNoYXJPbmUsIGNoYXJUd28sIHNlbENoYXIxLCBzZWxDaGFyMjtcclxuICBsZXQgdnMsIGNoYXJGcmFtZTEsIGNoYXJGcmFtZTIsIFxyXG4gICAgY2hhckZyYW1lMUxlZnQsIGNoYXJGcmFtZTFSaWdodCxcclxuICAgIGNoYXJGcmFtZTJMZWZ0LCBjaGFyRnJhbWUyUmlnaHQ7XHJcbiAgXHJcbiAgbGV0IGJ0blBsYXksIGJ0bkJhY2s7XHJcbiAgbGV0IGJsdWVGbGFnLCByZWRGbGFnO1xyXG4gIGxldCBjMSxjMjtcclxuICAgICAgICAgIFxyXG4gIGNoYXJzZWxlY3QuaW5pdCA9IGZ1bmN0aW9uKGluaXQpIHtcclxuICAgIGNhbWVyYS5zZXRSb3RhdGlvbigwLCAwLCAwKTtcclxuICAgIGNhbWVyYS5zZXRQb3NpdGlvbigwLCAwLCAwKTtcclxuICAgIGNhbWVyYS56b29tKDEpO1xyXG4gICAgXHJcbiAgICBncmFwaGljcy5zZXRCYWNrZ3JvdW5kQ29sb3IoJ2JsYWNrJyk7XHJcbiAgICBcclxuICAgIGJnID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBjaGFyc2VsZWN0Lm1lc2hlcy5iYWNrZ3JvdW5kLCBcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKCksIFxyXG4gICAgICBzY2FsZTogbmV3IG1hdGhzLlZlY3RvcjMoNiwgOCwgMClcclxuICAgIH0pXHJcbiAgICB3b3JsZC5hZGQoYmcpXHJcbiAgICBcclxuICAgIHZzID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBjaGFyc2VsZWN0Lm1lc2hlcy52cyxcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKDAsIC00MCwgNDApXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICB3b3JsZC5hZGQodnMpXHJcbiAgICBcclxuICAgIGNoYXJGcmFtZTEgPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IGNoYXJzZWxlY3QubWVzaGVzLmNoYXJGcmFtZTEsXHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygtMTE1LCAtMTUwLCAxKSxcclxuICAgICAgcm90YXRpb246IG5ldyBtYXRocy5WZWN0b3IzKDAsIDAsIC01KVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY2hhckZyYW1lMUxlZnQgPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IGNoYXJzZWxlY3QubWVzaGVzLmJ0bkFycm93LFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoLTIzMCwgLTE1MCwgMTApLFxyXG4gICAgICByb3RhdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoMCwgMCwgMCksXHJcbiAgICAgIHNjYWxlOiBuZXcgbWF0aHMuVmVjdG9yMygtMSwgMSwgMSlcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNoYXJGcmFtZTFSaWdodCA9IG5ldyBvYmplY3RzLkdhbWVPYmplY3Qoe1xyXG4gICAgICBmYWNlczogY2hhcnNlbGVjdC5tZXNoZXMuYnRuQXJyb3csXHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygxMCwgLTE1MCwgMTApLFxyXG4gICAgICByb3RhdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoMCwgMCwgMClcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNoYXJGcmFtZTIgPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IGNoYXJzZWxlY3QubWVzaGVzLmNoYXJGcmFtZTIsXHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygxMTUsIDEwMCwgMSksXHJcbiAgICAgIHJvdGF0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygwLCAwLCA1KVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY2hhckZyYW1lMkxlZnQgPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IGNoYXJzZWxlY3QubWVzaGVzLmJ0bkFycm93LFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoMCwgMTAwLCAxMCksXHJcbiAgICAgIHJvdGF0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygwLCAwLCAwKSxcclxuICAgICAgc2NhbGU6IG5ldyBtYXRocy5WZWN0b3IzKC0xLCAxLCAxKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY2hhckZyYW1lMlJpZ2h0ID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBjaGFyc2VsZWN0Lm1lc2hlcy5idG5BcnJvdyxcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKDIzMCwgMTAwLCAxMCksXHJcbiAgICAgIHJvdGF0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygwLCAwLCAwKVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNoYXJGcmFtZTFMZWZ0Lm1lc2gub25jbGljayA9IGhhbmRsZUZyYW1lMUxlZnQ7XHJcbiAgICBjaGFyRnJhbWUxUmlnaHQubWVzaC5vbmNsaWNrID0gaGFuZGxlRnJhbWUxUmlnaHQ7XHJcbiAgICBjaGFyRnJhbWUyTGVmdC5tZXNoLm9uY2xpY2sgPSBoYW5kbGVGcmFtZTJMZWZ0O1xyXG4gICAgY2hhckZyYW1lMlJpZ2h0Lm1lc2gub25jbGljayA9IGhhbmRsZUZyYW1lMlJpZ2h0O1xyXG4gICAgXHJcbiAgICBsZXQgYnV0dG9uc0xlZnQgPSBbXHJcbiAgICAgIGNoYXJGcmFtZTFMZWZ0LFxyXG4gICAgICBjaGFyRnJhbWUyTGVmdFxyXG4gICAgXTtcclxuICAgIFxyXG4gICAgYnRuUGxheSA9IG5ldyBvYmplY3RzLkdhbWVPYmplY3Qoe1xyXG4gICAgICBmYWNlczogY2hhcnNlbGVjdC5tZXNoZXMuYnRuRm9yd2FyZCxcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKDE4NSwgMzIwLCAxMCksXHJcbiAgICAgIHNjYWxlOiBuZXcgbWF0aHMuVmVjdG9yMygxLCAxLCAxKSBcclxuICAgIH0pXHJcbiAgXHJcbiAgICBidG5QbGF5Lm1lc2gub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgIHV0b3B5LnN3aXRjaFN0YXRlKCdjb3JyaWRvcnNlbGVjdGlvbnN0YXRlJykgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJ0bkJhY2sgPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IGNoYXJzZWxlY3QubWVzaGVzLmJ0bkJhY2ssXHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygtMTkwLCAzMjAsIDEwKSxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBidG5CYWNrLm1lc2gub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgIHV0b3B5LnN3aXRjaFN0YXRlKCdtZW51c3RhdGUnKSBcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IGJ1dHRvbnNSaWdodCA9IFtcclxuICAgICAgY2hhckZyYW1lMVJpZ2h0LFxyXG4gICAgICBjaGFyRnJhbWUyUmlnaHQsXHJcbiAgICAgIGJ0blBsYXksXHJcbiAgICAgIGJ0bkJhY2tcclxuICAgIF07XHJcbiAgICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9uc0xlZnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYnV0dG9uc0xlZnRbaV0ubWVzaC5vbm1vdXNlZW50ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBidXR0b25zTGVmdFtpXS5zY2FsZS5zZXQoLTEuMywgMS4zLCAxLjMpO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgYnV0dG9uc0xlZnRbaV0ubWVzaC5vbm1vdXNlbGVhdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBidXR0b25zTGVmdFtpXS5zY2FsZS5zZXQoLTEsIDEsIDEpO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgYnV0dG9uc0xlZnRbaV0ubWVzaC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGJ1dHRvbnNMZWZ0W2ldLnNjYWxlLnNldCgtMSwgMSwgMSk7XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICBidXR0b25zTGVmdFtpXS5tZXNoLm9ubW91c2V1cCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGJ1dHRvbnNMZWZ0W2ldLnNjYWxlLnNldCgtMS4zLCAxLjMsIDEuMyk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9uc1JpZ2h0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGJ1dHRvbnNSaWdodFtpXS5tZXNoLm9ubW91c2VlbnRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGJ1dHRvbnNSaWdodFtpXS5zY2FsZS5zZXQoMS4zLCAxLjMsIDEuMyk7XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICBidXR0b25zUmlnaHRbaV0ubWVzaC5vbm1vdXNlbGVhdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBidXR0b25zUmlnaHRbaV0uc2NhbGUuc2V0KDEsIDEsIDEpO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgYnV0dG9uc1JpZ2h0W2ldLm1lc2gub25tb3VzZWRvd24gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBidXR0b25zUmlnaHRbaV0uc2NhbGUuc2V0KDEsIDEsIDEpO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgYnV0dG9uc1JpZ2h0W2ldLm1lc2gub25tb3VzZXVwID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYnV0dG9uc1JpZ2h0W2ldLnNjYWxlLnNldCgxLjMsIDEuMywgMS4zKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgd29ybGQuYWRkKGNoYXJGcmFtZTEpO1xyXG4gICAgd29ybGQuYWRkKGNoYXJGcmFtZTIpO1xyXG4gICAgXHJcbiAgICB3b3JsZC5hZGQoY2hhckZyYW1lMUxlZnQpO1xyXG4gICAgd29ybGQuYWRkKGNoYXJGcmFtZTFSaWdodCk7XHJcbiAgICBcclxuICAgIHdvcmxkLmFkZChjaGFyRnJhbWUyTGVmdCk7XHJcbiAgICB3b3JsZC5hZGQoY2hhckZyYW1lMlJpZ2h0KTtcclxuICBcclxuICAgIHdvcmxkLmFkZChidG5QbGF5KVxyXG4gICAgd29ybGQuYWRkKGJ0bkJhY2spXHJcbiAgICBcclxuICAgIHNlbENoYXIxID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBjaGFyc2VsZWN0Lm1lc2hlcy5jaGFyU2VsMSxcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKC0xMTUsIC0xNTAsIDEwKSxcclxuICAgICAgcm90YXRpb246IG5ldyBtYXRocy5WZWN0b3IzKDAsIDAsIDApXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgc2VsQ2hhcjIgPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IGNoYXJzZWxlY3QubWVzaGVzLmNoYXJTZWwyLFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoMTE1LCAxMDAsIDEwKSxcclxuICAgICAgcm90YXRpb246IG5ldyBtYXRocy5WZWN0b3IzKDAsIDAsIDApXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgd29ybGQuYWRkKHNlbENoYXIxKTtcclxuICAgIHdvcmxkLmFkZChzZWxDaGFyMik7XHJcbiAgICBcclxuICAgIGJsdWVGbGFnID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBjaGFyc2VsZWN0Lm1lc2hlcy5ibHVlRmxhZyxcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKDE3MCwgNjAsIDIpLFxyXG4gICAgICByb3RhdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoMCwgMCwgMTApXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmVkRmxhZyA9IG5ldyBvYmplY3RzLkdhbWVPYmplY3Qoe1xyXG4gICAgICBmYWNlczogY2hhcnNlbGVjdC5tZXNoZXMucmVkRmxhZyxcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKC0xNzAsIC0xODAsIDIpLFxyXG4gICAgICBzY2FsZTogbmV3IG1hdGhzLlZlY3RvcjMoLTEsIDEsIDEpLFxyXG4gICAgICByb3RhdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoMCwgMCwgMTUpXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgd29ybGQuYWRkKGJsdWVGbGFnKVxyXG4gICAgd29ybGQuYWRkKHJlZEZsYWcpXHJcbiAgICBcclxuICAgIGdyYXBoaWNzLnNldEZhY2VUZXh0dXJlKFxyXG4gICAgICBzZWxDaGFyMS5tZXNoLmNoaWxkTm9kZXNbMF0sIGFzc2V0cy50ZXh0dXJlcy5ndWFyZDFcclxuICAgICk7XHJcbiAgICBncmFwaGljcy5zZXRGYWNlVGV4dHVyZShcclxuICAgICAgc2VsQ2hhcjIubWVzaC5jaGlsZE5vZGVzWzBdLCBhc3NldHMudGV4dHVyZXMuZ3VhcmQyXHJcbiAgICApO1xyXG4gICAgXHJcbiAgICBjMT0wO2MyPTFcclxuICB9O1xyXG4gIFxyXG4gIGxldCBhbmdsZSA9IDAuMDtcclxuICBjaGFyc2VsZWN0LnVwZGF0ZSA9IGZ1bmN0aW9uKGR0KSB7XHJcbiAgICBhbmdsZSArPSBkdDtcclxuICAgIFxyXG4gICAgaWYgKGFuZ2xlID49IDM2MCkgYW5nbGUgLT0gMzYwO1xyXG4gICAgXHJcbiAgICB2cy5wb3NpdGlvbi55ID0gLTQwICsgKE1hdGguc2luKGFuZ2xlKSAqIDEwKTtcclxuICAgIHZzLnJvdGF0aW9uLnogPSAodnMucG9zaXRpb24ueSs0MCkgKiBNYXRoLnNpbihhbmdsZSkgKiAwLjQ7XHJcbiAgICBcclxuICAgIHZzLnVwZGF0ZSgpO1xyXG4gICAgXHJcbiAgICBjaGFyRnJhbWUxTGVmdC51cGRhdGUoKTtcclxuICAgIGNoYXJGcmFtZTFSaWdodC51cGRhdGUoKTtcclxuICAgIGNoYXJGcmFtZTJMZWZ0LnVwZGF0ZSgpO1xyXG4gICAgY2hhckZyYW1lMlJpZ2h0LnVwZGF0ZSgpO1xyXG4gICAgYnRuUGxheS51cGRhdGUoKVxyXG4gICAgYnRuQmFjay51cGRhdGUoKVxyXG4gIH07XHJcbiAgXHJcbiAgbGV0IGNoYXJzID0gW1xyXG4gICAgJ2d1YXJkMScsXHJcbiAgICAnZ3VhcmQyJyxcclxuICAgICdraW5nJyxcclxuICAgICdnb2JsaW4xJyxcclxuICAgICdnb2JsaW4yJyxcclxuICAgICdnb2JsaW5LaW5nJyxcclxuICAgICdiYXJiYXJpYW4xJyxcclxuICAgICdiYXJiYXJpYW4yJyxcclxuICAgICdiYXJiYXJpYW5LaW5nJyxcclxuICAgICdzZWN1cml0eTEnLFxyXG4gICAgJ3NlY3VyaXR5MicsXHJcbiAgICAncHJlc2lkZW50J1xyXG4gIF1cclxuICBcclxuICBcclxuICBmdW5jdGlvbiBoYW5kbGVGcmFtZTFMZWZ0KCkge1xyXG4gICAgYzEtLTtcclxuICAgIFxyXG4gICAgaWYgKGMxID09PSBjMikgYzEtLVxyXG4gICAgaWYgKGMxIDwgMCkgYzEgPSAxMVxyXG4gICAgaWYgKGMxID09PSBjMikgYzEtLVxyXG4gICAgXHJcbiAgICBncmFwaGljcy5zZXRGYWNlVGV4dHVyZShcclxuICAgICAgc2VsQ2hhcjEubWVzaC5jaGlsZE5vZGVzWzBdLCBhc3NldHMudGV4dHVyZXNbY2hhcnNbYzFdXVxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBoYW5kbGVGcmFtZTFSaWdodCgpIHtcclxuICAgIGMxKys7XHJcbiAgICBcclxuICAgIGlmIChjMSA9PT0gYzIpIGMxKytcclxuICAgIGlmIChjMSA+IDExKSBjMSA9IDBcclxuICAgIGlmIChjMSA9PT0gYzIpIGMxKytcclxuICAgIFxyXG4gICAgZ3JhcGhpY3Muc2V0RmFjZVRleHR1cmUoXHJcbiAgICAgIHNlbENoYXIxLm1lc2guY2hpbGROb2Rlc1swXSwgYXNzZXRzLnRleHR1cmVzW2NoYXJzW2MxXV0pO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBoYW5kbGVGcmFtZTJMZWZ0KCkge1xyXG4gICAgYzItLTtcclxuICAgIFxyXG4gICAgaWYgKGMyID09PSBjMSkgYzItLVxyXG4gICAgaWYgKGMyIDwgMCkgYzIgPSAxMVxyXG4gICAgaWYgKGMyID09PSBjMSkgYzItLVxyXG4gICAgXHJcbiAgICBncmFwaGljcy5zZXRGYWNlVGV4dHVyZShcclxuICAgICAgc2VsQ2hhcjIubWVzaC5jaGlsZE5vZGVzWzBdLCBhc3NldHMudGV4dHVyZXNbY2hhcnNbYzJdXVxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gaGFuZGxlRnJhbWUyUmlnaHQoKSB7XHJcbiAgICBjMisrO1xyXG4gICAgXHJcbiAgICBpZiAoYzIgPT09IGMxKSBjMisrXHJcbiAgICBpZiAoYzIgPiAxMSkgYzIgPSAwXHJcbiAgICBpZiAoYzIgPT09IGMxKSBjMisrXHJcbiAgICBcclxuICAgIGdyYXBoaWNzLnNldEZhY2VUZXh0dXJlKFxyXG4gICAgICBzZWxDaGFyMi5tZXNoLmNoaWxkTm9kZXNbMF0sIGFzc2V0cy50ZXh0dXJlc1tjaGFyc1tjMl1dXHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBjaGFyc2VsZWN0LmZpbmlzaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgd29ybGQuZGVzdHJveSgpO1xyXG4gICAgc2hhcmVkLnNlbGVjdGVkQ2hhcjEgPSBjaGFyc1tjMl1cclxuICAgIHNoYXJlZC5zZWxlY3RlZENoYXIyID0gY2hhcnNbYzFdXHJcbiAgfTtcclxuICBcclxuICByZXR1cm4gY2hhcnNlbGVjdDtcclxufShcclxuICB3aW5kb3cudXRvcHksIFxyXG4gIHdpbmRvdy51dG9weS5pbnB1dCwgXHJcbiAgd2luZG93LnV0b3B5LmdyYXBoaWNzLFxyXG4gIHdpbmRvdy51dG9weS5hc3NldHMsXHJcbiAgd2luZG93LnV0b3B5LndvcmxkLFxyXG4gIHdpbmRvdy51dG9weS5vYmplY3RzLFxyXG4gIHdpbmRvdy51dG9weS5jYW1lcmEsXHJcbiAgd2luZG93LnV0b3B5Lm1hdGhzLFxyXG4gIHdpbmRvdy51dG9weS5zaGFyZWRcclxuKSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGwgPSBjb25zb2xlLmxvZ1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24odXRvcHksIGlucHV0LCBncmFwaGljcywgYXNzZXRzLCB3b3JsZCwgb2JqZWN0cywgY2FtZXJhLCBtYXRocywgc2hhcmVkLCBndWkpXHJcbntcclxuICBjb25zdCBzdGF0ZSA9IHt9O1xyXG5cclxuICBzdGF0ZS5tZXNoZXMgPSB7XHJcbiAgICBjaGFyRnJhbWUxOiBncmFwaGljcy5jcmVhdGVGYWNlKDMwMCwgMzAwLCBhc3NldHMudGV4dHVyZXMuY2hhckZyYW1lMiksXHJcbiAgICBjb3JyaWRvclNlbDogZ3JhcGhpY3MuY3JlYXRlRmFjZSgxODUsIDE4NSwgYXNzZXRzLnRleHR1cmVzLmNvcnJpZG9ySHVtYW5zKSxcclxuICAgIGJ0bkFycm93OiBncmFwaGljcy5jcmVhdGVGYWNlKDgwLCA4MCwgYXNzZXRzLnRleHR1cmVzLmJ0bkFycm93KSxcclxuICAgIGJ0blBsYXk6IGdyYXBoaWNzLmNyZWF0ZUZhY2UoMjU2LCAyNTYsIGFzc2V0cy50ZXh0dXJlcy5idG5QbGF5KSxcclxuICAgIGJ0bkJhY2s6IGdyYXBoaWNzLmNyZWF0ZUZhY2UoODAsIDgwLCBhc3NldHMudGV4dHVyZXMuYnRuQmFjayksXHJcbiAgICBiYWNrZ3JvdW5kOiBncmFwaGljcy5jcmVhdGVGYWNlKDEyOCwgMTI4LCBhc3NldHMudGV4dHVyZXMubWVudUJhY2tncm91bmQpXHJcbiAgfTtcclxuXHJcbiAgbGV0IGJnO1xyXG4gIGxldCBjaGFyRnJhbWUxLCBjaGFyRnJhbWUxTGVmdCwgY2hhckZyYW1lMVJpZ2h0O1xyXG4gIGxldCBraWxsc0xlZnQsIGtpbGxzUmlnaHQ7XHJcblxyXG4gIGxldCBidG5QbGF5LCBidG5CYWNrLCBzZWxDaGFyMTtcclxuICBsZXQgYzE7XHJcbiAgXHJcbiAgbGV0IGtpbGxzLCBsYWJlbEtpbGxDb3VudCwgbGFiZWxDb3JyaWRvclR5cGU7XHJcblxyXG4gIHN0YXRlLmluaXQgPSBmdW5jdGlvbihpbml0KSB7XHJcbiAgICBraWxscyA9IDNcclxuICAgIGNhbWVyYS5zZXRSb3RhdGlvbigwLCAwLCAwKTtcclxuICAgIGNhbWVyYS5zZXRQb3NpdGlvbigwLCAwLCAwKTtcclxuICAgIGNhbWVyYS56b29tKDEpO1xyXG5cclxuICAgIGJnID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBzdGF0ZS5tZXNoZXMuYmFja2dyb3VuZCxcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKCksXHJcbiAgICAgIHNjYWxlOiBuZXcgbWF0aHMuVmVjdG9yMyg2LCA4LCAwKVxyXG4gICAgfSlcclxuICAgIHdvcmxkLmFkZChiZylcclxuXHJcbiAgICBjaGFyRnJhbWUxID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBzdGF0ZS5tZXNoZXMuY2hhckZyYW1lMSxcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKDAsIC0xNDAsIDMpLFxyXG4gICAgICByb3RhdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoMCwgMCwgMClcclxuICAgIH0pO1xyXG5cclxuICAgIGNoYXJGcmFtZTFMZWZ0ID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBzdGF0ZS5tZXNoZXMuYnRuQXJyb3csXHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygtMTM1LCAtMTQwLCAxMCksXHJcbiAgICAgIHJvdGF0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygwLCAwLCAwKSxcclxuICAgICAgc2NhbGU6IG5ldyBtYXRocy5WZWN0b3IzKC0xLCAxLCAxKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY2hhckZyYW1lMVJpZ2h0ID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBzdGF0ZS5tZXNoZXMuYnRuQXJyb3csXHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygxMzUsIC0xNDAsIDEwKSxcclxuICAgICAgcm90YXRpb246IG5ldyBtYXRocy5WZWN0b3IzKDAsIDAsIDApXHJcbiAgICB9KTtcclxuXHJcbiAgICBjaGFyRnJhbWUxTGVmdC5tZXNoLm9uY2xpY2sgPSBoYW5kbGVGcmFtZTFMZWZ0O1xyXG4gICAgY2hhckZyYW1lMVJpZ2h0Lm1lc2gub25jbGljayA9IGhhbmRsZUZyYW1lMVJpZ2h0O1xyXG5cclxuICAgIGxhYmVsS2lsbENvdW50ID0gZ3VpLmNyZWF0ZUxhYmVsKCdLaWxscyAzJylcclxuICAgIGxhYmVsS2lsbENvdW50LnN0eWxlLnRyYW5zZm9ybT0gJ3RyYW5zbGF0ZVgoMjAwcHgpIHRyYW5zbGF0ZVkoMzQwcHgpJ1xyXG4gICAgbGFiZWxLaWxsQ291bnQuc3R5bGUudG9wID0gJzAlJ1xyXG4gICAgbGFiZWxLaWxsQ291bnQuY2xhc3NMaXN0LmFkZCgndGV4dC1zY29yZScpXHJcbiAgICBcclxuICAgIGxhYmVsQ29ycmlkb3JUeXBlID0gZ3VpLmNyZWF0ZUxhYmVsKCdOb3JtYWwnKVxyXG4gICAgbGFiZWxDb3JyaWRvclR5cGUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMjAwcHgpIHRyYW5zbGF0ZVkoOTBweCkgdHJhbnNsYXRlWigxMDBweCknXHJcbiAgICBsYWJlbENvcnJpZG9yVHlwZS5zdHlsZS50b3AgPSAnMCUnXHJcbiAgICBsYWJlbENvcnJpZG9yVHlwZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXNjb3JlJylcclxuICAgIGxhYmVsQ29ycmlkb3JUeXBlLnN0eWxlLmZvbnRTaXplID0gJzMwcHgnXHJcblxyXG4gICAga2lsbHNMZWZ0ID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBzdGF0ZS5tZXNoZXMuYnRuQXJyb3csXHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygtMTIwLCAxMjAsIDEwKSxcclxuICAgICAgcm90YXRpb246IG5ldyBtYXRocy5WZWN0b3IzKDAsIDAsIDApLFxyXG4gICAgICBzY2FsZTogbmV3IG1hdGhzLlZlY3RvcjMoLTEsIDEsIDEpXHJcbiAgICB9KTtcclxuXHJcbiAgICBraWxsc1JpZ2h0ID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBzdGF0ZS5tZXNoZXMuYnRuQXJyb3csXHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygxMjAsIDEyMCwgMTApLFxyXG4gICAgICByb3RhdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoMCwgMCwgMClcclxuICAgIH0pO1xyXG5cclxuICAgIGtpbGxzTGVmdC5tZXNoLm9uY2xpY2sgPSBoYW5kbGVLaWxsc0xlZnQ7XHJcbiAgICBraWxsc1JpZ2h0Lm1lc2gub25jbGljayA9IGhhbmRsZUtpbGxzUmlnaHQ7XHJcblxyXG4gICAgbGV0IGJ1dHRvbnNMZWZ0ID0gW1xyXG4gICAgICBjaGFyRnJhbWUxTGVmdCxcclxuICAgICAga2lsbHNMZWZ0XHJcbiAgICBdO1xyXG5cclxuICAgIGJ0blBsYXkgPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IHN0YXRlLm1lc2hlcy5idG5QbGF5LFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoMCwgMzIwLCAxMCksXHJcbiAgICAgIHNjYWxlOiBuZXcgbWF0aHMuVmVjdG9yMygxLCAxLCAxKVxyXG4gICAgfSk7XHJcblxyXG4gICAgYnRuUGxheS5tZXNoLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAvL3NoYXJlZC5zZWxlY3RlZEdhbWVNb2RlID0gJ211bHRpJ1xyXG4gICAgICB1dG9weS5zd2l0Y2hTdGF0ZSgncGxheXN0YXRlJylcclxuICAgIH1cclxuXHJcbiAgICBidG5CYWNrID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBzdGF0ZS5tZXNoZXMuYnRuQmFjayxcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKC0yMTAsIC0zNDUsIDEwKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGJ0bkJhY2subWVzaC5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgdXRvcHkuc3dpdGNoU3RhdGUoJ2NoYXJzZWxlY3RzdGF0ZScpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGJ1dHRvbnNSaWdodCA9IFtcclxuICAgICAgY2hhckZyYW1lMVJpZ2h0LFxyXG4gICAgICBidG5QbGF5LFxyXG4gICAgICBidG5CYWNrLFxyXG4gICAgICBraWxsc1JpZ2h0XHJcbiAgICBdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9uc0xlZnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYnV0dG9uc0xlZnRbaV0ubWVzaC5vbm1vdXNlZW50ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBidXR0b25zTGVmdFtpXS5zY2FsZS5zZXQoLTEuMywgMS4zLCAxLjMpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbnNMZWZ0W2ldLm1lc2gub25tb3VzZWxlYXZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYnV0dG9uc0xlZnRbaV0uc2NhbGUuc2V0KC0xLCAxLCAxKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b25zTGVmdFtpXS5tZXNoLm9ubW91c2Vkb3duID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYnV0dG9uc0xlZnRbaV0uc2NhbGUuc2V0KC0xLCAxLCAxKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b25zTGVmdFtpXS5tZXNoLm9ubW91c2V1cCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGJ1dHRvbnNMZWZ0W2ldLnNjYWxlLnNldCgtMS4zLCAxLjMsIDEuMylcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9uc1JpZ2h0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGJ1dHRvbnNSaWdodFtpXS5tZXNoLm9ubW91c2VlbnRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGJ1dHRvbnNSaWdodFtpXS5zY2FsZS5zZXQoMS4zLCAxLjMsIDEuMylcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uc1JpZ2h0W2ldLm1lc2gub25tb3VzZWxlYXZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYnV0dG9uc1JpZ2h0W2ldLnNjYWxlLnNldCgxLCAxLCAxKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b25zUmlnaHRbaV0ubWVzaC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGJ1dHRvbnNSaWdodFtpXS5zY2FsZS5zZXQoMSwgMSwgMSlcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uc1JpZ2h0W2ldLm1lc2gub25tb3VzZXVwID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYnV0dG9uc1JpZ2h0W2ldLnNjYWxlLnNldCgxLjMsIDEuMywgMS4zKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd29ybGQuYWRkKGNoYXJGcmFtZTEpXHJcblxyXG4gICAgd29ybGQuYWRkKGNoYXJGcmFtZTFMZWZ0KVxyXG4gICAgd29ybGQuYWRkKGNoYXJGcmFtZTFSaWdodClcclxuXHJcbiAgICB3b3JsZC5hZGQoYnRuUGxheSlcclxuICAgIHdvcmxkLmFkZChidG5CYWNrKVxyXG5cclxuXHJcbiAgICB3b3JsZC5hZGQoa2lsbHNMZWZ0KVxyXG4gICAgd29ybGQuYWRkKGtpbGxzUmlnaHQpXHJcblxyXG4gICAgc2VsQ2hhcjEgPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IHN0YXRlLm1lc2hlcy5jb3JyaWRvclNlbCxcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKDAsIC0xNDAsIDApLFxyXG4gICAgICByb3RhdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoMCwgMCwgMClcclxuICAgIH0pXHJcblxyXG4gICAgd29ybGQuYWRkKHNlbENoYXIxKVxyXG5cclxuICAgIGdyYXBoaWNzLnNldEZhY2VUZXh0dXJlKHNlbENoYXIxLm1lc2guY2hpbGROb2Rlc1swXSwgYXNzZXRzLnRleHR1cmVzLmNvcnJpZG9ySHVtYW5zKVxyXG5cclxuICAgIGMxPTA7XHJcbiAgfTtcclxuXHJcbiAgc3RhdGUudXBkYXRlID0gZnVuY3Rpb24oZHQpIHtcclxuICAgIGNoYXJGcmFtZTFMZWZ0LnVwZGF0ZSgpO1xyXG4gICAgY2hhckZyYW1lMVJpZ2h0LnVwZGF0ZSgpO1xyXG4gICAgYnRuUGxheS51cGRhdGUoKVxyXG4gICAgYnRuQmFjay51cGRhdGUoKVxyXG4gICAga2lsbHNSaWdodC51cGRhdGUoKVxyXG4gICAga2lsbHNMZWZ0LnVwZGF0ZSgpXHJcbiAgfTtcclxuXHJcbiAgbGV0IGNoYXJzID0gW1xyXG4gICAgJ2NvcnJpZG9ySHVtYW5zJyxcclxuICAgICdjb3JyaWRvckdvYmxpbnMnLFxyXG4gICAgJ2NvcnJpZG9yQmFyYmFyaWFucycsXHJcbiAgICAnY29ycmlkb3JHb3Zlcm5tZW50J1xyXG4gIF1cclxuICBcclxuICBmdW5jdGlvbiBjaGVja0NvcnJpZG9yVHlwZSgpIHtcclxuICAgIHN3aXRjaCAoY2hhcnNbYzFdKSB7XHJcbiAgICAgIGNhc2UgJ2NvcnJpZG9ySHVtYW5zJzoge1xyXG4gICAgICAgIGxhYmVsQ29ycmlkb3JUeXBlLmlubmVySFRNTCA9ICdOb3JtYWwnXHJcbiAgICAgIH0gYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2NvcnJpZG9yR29ibGlucyc6IHtcclxuICAgICAgICBsYWJlbENvcnJpZG9yVHlwZS5pbm5lckhUTUwgPSAnRmxvYXR5J1xyXG4gICAgICB9IGJyZWFrO1xyXG4gICAgICBjYXNlICdjb3JyaWRvckJhcmJhcmlhbnMnOiB7XHJcbiAgICAgICAgbGFiZWxDb3JyaWRvclR5cGUuaW5uZXJIVE1MID0gJ0hlYXZ5J1xyXG4gICAgICB9IGJyZWFrO1xyXG4gICAgICBjYXNlICdjb3JyaWRvckdvdmVybm1lbnQnOiB7XHJcbiAgICAgICAgbGFiZWxDb3JyaWRvclR5cGUuaW5uZXJIVE1MID0gJ1dpbmR5J1xyXG4gICAgICB9IGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRnJhbWUxTGVmdCgpIHtcclxuICAgIGMxLS07XHJcbiAgICBpZiAoYzEgPCAwKSBjMSA9IDNcclxuICAgIGNoZWNrQ29ycmlkb3JUeXBlKClcclxuICAgIGdyYXBoaWNzLnNldEZhY2VUZXh0dXJlKHNlbENoYXIxLm1lc2guY2hpbGROb2Rlc1swXSwgYXNzZXRzLnRleHR1cmVzW2NoYXJzW2MxXV0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVGcmFtZTFSaWdodCgpIHtcclxuICAgIGMxKys7XHJcbiAgICBpZiAoYzEgPiAzKSBjMSA9IDBcclxuICAgIGNoZWNrQ29ycmlkb3JUeXBlKClcclxuICAgIGdyYXBoaWNzLnNldEZhY2VUZXh0dXJlKHNlbENoYXIxLm1lc2guY2hpbGROb2Rlc1swXSwgYXNzZXRzLnRleHR1cmVzW2NoYXJzW2MxXV0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlS2lsbHNMZWZ0KCkge1xyXG4gICAgaWYgKGtpbGxzID4gMilcclxuICAgICAga2lsbHMtLVxyXG4gICAgbGFiZWxLaWxsQ291bnQuaW5uZXJIVE1MID0gJ0tpbGxzICcgKyBraWxsc1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlS2lsbHNSaWdodCgpIHtcclxuICAgIGlmIChraWxscyA8IDk5KVxyXG4gICAgICBraWxscysrXHJcbiAgICBsYWJlbEtpbGxDb3VudC5pbm5lckhUTUwgPSAnS2lsbHMgJyArIGtpbGxzXHJcbiAgfVxyXG5cclxuICBzdGF0ZS5maW5pc2ggPSBmdW5jdGlvbigpIHtcclxuICAgIHNoYXJlZC5zZWxlY3RlZENvcnJpZG9yID0gY2hhcnNbYzFdXHJcbiAgICBzaGFyZWQuZ2FtZVNjb3JlID0ga2lsbHNcclxuICAgIGFzc2V0cy5sb2FkQ29ycmlkb3JUZXh0dXJlcyhjaGFyc1tjMV0pXHJcbiAgICB3b3JsZC5kZXN0cm95KCk7XHJcbiAgICBndWkuZGVzdHJveSgpXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59KFxyXG4gIHdpbmRvdy51dG9weSxcclxuICB3aW5kb3cudXRvcHkuaW5wdXQsXHJcbiAgd2luZG93LnV0b3B5LmdyYXBoaWNzLFxyXG4gIHdpbmRvdy51dG9weS5hc3NldHMsXHJcbiAgd2luZG93LnV0b3B5LndvcmxkLFxyXG4gIHdpbmRvdy51dG9weS5vYmplY3RzLFxyXG4gIHdpbmRvdy51dG9weS5jYW1lcmEsXHJcbiAgd2luZG93LnV0b3B5Lm1hdGhzLFxyXG4gIHdpbmRvdy51dG9weS5zaGFyZWQsXHJcbiAgd2luZG93LnV0b3B5Lmd1aVxyXG4pKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24obWF0aHMsIHV0aWxzLCBjYW1lcmEpIHtcclxuICBjb25zdCBncmFwaGljcyA9IHtcclxuICAgIGJhc2VXaWR0aDogMzIwLFxyXG4gICAgYmFzZUhlaWdodDogNDgwLFxyXG4gICAgbWF4UmVhanVzdFdpZHRoOiA3NjgsXHJcbiAgICBtYXhSZWFqdXN0SGVpZ2h0OiA1NDAsXHJcbiAgICBhc3BlY3RSYXRpbzogMS4zMyxcclxuXHJcbiAgICByZW5kZXJpbmc6IHtcclxuICAgICAgaW1hZ2VSZW5kZXJpbmc6ICcnXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZ3JhcGhpY3Muc2V0SW1hZ2VSZW5kZXJpbmcgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgZ3JhcGhpY3MucmVuZGVyaW5nLmltYWdlUmVuZGVyaW5nID0gdmFsdWU7XHJcbiAgfTtcclxuXHJcbiAgZ3JhcGhpY3Muc2V0QmFja2dyb3VuZENvbG9yID0gZnVuY3Rpb24oY29sb3IpIHtcclxuICAgIHdpbmRvdy51dG9weS5tYWluQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gIH07XHJcblxyXG4gIGdyYXBoaWNzLnJlc2l6ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBsZXQgd2lkdGggPSB3aW5kb3cudXRvcHkubWFpbkNvbnRhaW5lci5jbGllbnRXaWR0aDtcclxuICAgIGxldCBoZWlnaHQgPSB3aW5kb3cudXRvcHkubWFpbkNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgbGV0IG5ld1dpZHRoLCBuZXdIZWlnaHQsIHJhdGlvO1xyXG5cclxuICAgIGlmICh3aWR0aCAvIGhlaWdodCA+IGhlaWdodCAvIHdpZHRoKSB7XHJcbiAgICAgIG5ld0hlaWdodCA9IGhlaWdodDtcclxuICAgICAgbmV3V2lkdGggPSBuZXdIZWlnaHQgKiB3aWR0aCAvIGhlaWdodDtcclxuICAgICAgbmV3V2lkdGggPSBtYXRocy5jbGFtcChuZXdXaWR0aCwgMCwgZ3JhcGhpY3MubWF4UmVhanVzdFdpZHRoKTtcclxuICAgICAgcmF0aW8gPSAobmV3SGVpZ2h0IC8gbmV3V2lkdGgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3V2lkdGggPSB3aWR0aDtcclxuICAgICAgbmV3SGVpZ2h0ID0gbmV3V2lkdGggKiBoZWlnaHQgLyB3aWR0aDtcclxuICAgICAgbmV3SGVpZ2h0ID0gbWF0aHMuY2xhbXAobmV3SGVpZ2h0LCAwLCBncmFwaGljcy5tYXhSZWFqdXN0SGVpZ2h0KTtcclxuICAgICAgcmF0aW8gPSAobmV3V2lkdGggLyBuZXdIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdyYXBoaWNzLmFzcGVjdFJhdGlvID0gcmF0aW87XHJcblxyXG4gICAgLyogRVhQRVJJTUVOVEFMICovXHJcbiAgICBjYW1lcmEuc2V0UGVyc3BlY3RpdmUoY2FtZXJhLnBlcnNwZWN0aXZlICogZ3JhcGhpY3MuYXNwZWN0UmF0aW8pO1xyXG5cclxuICAgIGNhbWVyYS5zZXRTY2FsZShyYXRpbywgcmF0aW8sIHJhdGlvKTtcclxuICB9O1xyXG5cclxuICBncmFwaGljcy5yZXNpemUoKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZ3JhcGhpY3MucmVzaXplKTtcclxuXHJcbiAgZ3JhcGhpY3MubG9hZEN1YmVtYXAgPSBmdW5jdGlvbihjdWJlbWFwLCBib3R0b21MZXNzKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0ge307XHJcblxyXG4gICAgaWYgKGN1YmVtYXAuYWxsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmVzdWx0LmZyb250ID0gY3ViZW1hcC5hbGwuc3JjO1xyXG4gICAgICByZXN1bHQuYmFjayA9IGN1YmVtYXAuYWxsLnNyYztcclxuXHJcbiAgICAgIHJlc3VsdC5yaWdodCA9IGN1YmVtYXAuYWxsLnNyYztcclxuICAgICAgcmVzdWx0LmxlZnQgPSBjdWJlbWFwLmFsbC5zcmM7XHJcblxyXG4gICAgICByZXN1bHQudG9wID0gY3ViZW1hcC5hbGwuc3JjO1xyXG4gICAgICByZXN1bHQuYm90dG9tID0gYm90dG9tTGVzcz8gbnVsbCA6IGN1YmVtYXAuYWxsLnNyYztcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1YmVtYXAuc2lkZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXN1bHQuZnJvbnQgPSBjdWJlbWFwLnNpZGVzLnNyYztcclxuICAgICAgcmVzdWx0LmJhY2sgPSBjdWJlbWFwLnNpZGVzLnNyYztcclxuXHJcbiAgICAgIHJlc3VsdC5yaWdodCA9IGN1YmVtYXAuc2lkZXMuc3JjO1xyXG4gICAgICByZXN1bHQubGVmdCA9IGN1YmVtYXAuc2lkZXMuc3JjO1xyXG5cclxuICAgICAgcmVzdWx0LnRvcCA9IGN1YmVtYXAudG9wLnNyYztcclxuICAgICAgcmVzdWx0LmJvdHRvbSA9IGJvdHRvbUxlc3M/IG51bGwgOiBjdWJlbWFwLmJvdHRvbS5zcmM7XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdC5mcm9udCA9IGN1YmVtYXAuZnJvbnQuc3JjO1xyXG4gICAgcmVzdWx0LmJhY2sgPSBjdWJlbWFwLmJhY2suc3JjO1xyXG5cclxuICAgIHJlc3VsdC5yaWdodCA9IGN1YmVtYXAucmlnaHQuc3JjO1xyXG4gICAgcmVzdWx0LmxlZnQgPSBjdWJlbWFwLmxlZnQuc3JjO1xyXG5cclxuICAgIHJlc3VsdC50b3AgPSBjdWJlbWFwLnRvcC5zcmM7XHJcbiAgICByZXN1bHQuYm90dG9tID0gYm90dG9tTGVzcz8gbnVsbCA6IGN1YmVtYXAuYm90dG9tLnNyYztcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcblxyXG4gIGdyYXBoaWNzLnNldEZhY2VUZXh0dXJlID0gZnVuY3Rpb24oZmFjZSwgdGV4dHVyZSkge1xyXG4gICAgaWYgKHRleHR1cmUpIHtcclxuICAgICAgaWYgKHR5cGVvZih0ZXh0dXJlKSAgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBzd2l0Y2godGV4dHVyZVswXSkge1xyXG4gICAgICAgICAgY2FzZSAnOic6IHtcclxuICAgICAgICAgICAgZmFjZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0ZXh0dXJlLnNsaWNlKDEpO1xyXG4gICAgICAgICAgfSBicmVhaztcclxuXHJcbiAgICAgICAgICBjYXNlICc+Jzoge1xyXG4gICAgICAgICAgICBmYWNlLnN0eWxlLmJhY2tncm91bmQgPSB0ZXh0dXJlLnNsaWNlKDEpO1xyXG4gICAgICAgICAgfSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCF0ZXh0dXJlLnN0cmV0Y2hBbGwpIHtcclxuICAgICAgICAgIGZhY2Uuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoXFwnJyArIHRleHR1cmUuc3JjICsgJ1xcJykgJyArIFxyXG4gICAgICAgICAgICAodGV4dHVyZS5yZXBlYXQgPyAncmVwZWF0JyA6ICduby1yZXBlYXQnKVxyXG5cclxuICAgICAgICAgIGlmICghdGV4dHVyZS5yZXBlYXQpIHtcclxuICAgICAgICAgICAgZmFjZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb250YWluJ1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmFjZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFxyXG4gICAgICAgICAgICAgIHRleHR1cmUuc3RyZXRjaFggKyAncHggJyArIHRleHR1cmUuc3RyZXRjaFkgKyAncHgnXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmYWNlLnN0eWxlLmJhY2tncm91bmQgPSBcclxuICAgICAgICAgICAgJ3VybChcXCcnICsgdGV4dHVyZS5zcmMgKyAnXFwnKScgKyAnMCAwIC8gMTAwJSAxMDAlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBzaG91bGRDdWxsID0gdGV4dHVyZS5jdWxsICE9PSB1bmRlZmluZWQ/IHRleHR1cmUuY3VsbCA6IHRydWU7XHJcbiAgICBmYWNlLnN0eWxlLmJhY2tmYWNlVmlzaWJpbGl0eSA9IHNob3VsZEN1bGwgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJztcclxuXHJcbiAgICBpZiAodGV4dHVyZSkge1xyXG4gICAgICBmYWNlLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gdGV4dHVyZS5pbWFnZVJlbmRlcmluZyB8fCAndW5zZXQnO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGdyYXBoaWNzLmNyZWF0ZUZhY2UgPSBmdW5jdGlvbih3LCBoLCB0ZXh0dXJlLCB4LCB5LCB6LCByeCwgcnksIHJ6LCBcclxuICAgIHNreCwgc2t5KSBcclxuICB7XHJcbiAgICBsZXQgZmFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ3VyZScpO1xyXG4gICAgZmFjZS5mYWNlSWQgPSAnJztcclxuICAgIGZhY2Uuc3R5bGUud2lsbENoYW5nZSA9ICd0cmFuc2Zvcm0nO1xyXG5cclxuICAgIC8qIChIQUNLKTogV2l0aCBhbiBleHRyYSBwaXhlbCB5b3UgY2FuIGdldCByaWQgb2YgZmFjZS0+ZmFjZSBzZWFtcyAqL1xyXG4gICAgZmFjZS5zdHlsZS53aWR0aCA9ICh3ICsgMSB8fCAwKSArICdweCc7XHJcbiAgICBmYWNlLnN0eWxlLmhlaWdodCA9IChoICsgMSB8fCAwKSArICdweCc7XHJcblxyXG4gICAgZ3JhcGhpY3Muc2V0RmFjZVRleHR1cmUoZmFjZSwgdGV4dHVyZSk7XHJcblxyXG4gICAgZmFjZS5zdHlsZS50cmFuc2Zvcm0gPSBcclxuICAgICAgbWF0aHMuVHJhbnNmb3JtLnN0cmluZ2lmeShcclxuICAgICAgICB4LCB5LCB6LCBcclxuICAgICAgICByeCwgcnksIHJ6LCBcclxuICAgICAgICAxLCBcclxuICAgICAgICAodGV4dHVyZSAmJiB0ZXh0dXJlLmZsaXBYPyAtMSA6IDEpLCAxLCBza3gsIHNreVxyXG4gICAgICApO1xyXG5cclxuICAgIHJldHVybiBmYWNlO1xyXG4gIH07XHJcblxyXG4gIGdyYXBoaWNzLmNyZWF0ZUN1YmVGYWNlcyA9IGZ1bmN0aW9uKHN4LCBzeSwgc3osIGN1YmVtYXAsIGZsaXBCb3R0b20sIGJvdHRvbUxlc3MpIHtcclxuICAgIGxldCBtZXNoID0gW107XHJcblxyXG4gICAgbGV0IHNzeCA9IHN4IC8gMjtcclxuICAgIGxldCBzc3kgPSBzeSAvIDI7XHJcbiAgICBsZXQgc3N6ID0gc3ogLyAyO1xyXG5cclxuICAgIGN1YmVtYXAgPSBjdWJlbWFwIHx8ICcnO1xyXG4gICAgbGV0IGxvYWRlZEN1YmVtYXAgPSBcclxuICAgICAgdHlwZW9mKGN1YmVtYXApID09ICdzdHJpbmcnPyBjdWJlbWFwIDogZ3JhcGhpY3MubG9hZEN1YmVtYXAoY3ViZW1hcCk7XHJcblxyXG4gICAgbGV0IGZyb250ID0gXHJcbiAgICAgIGdyYXBoaWNzLmNyZWF0ZUZhY2UoXHJcbiAgICAgICAgc3gsIHN5LCAgXHJcbiAgICAgICAgbG9hZGVkQ3ViZW1hcC5mcm9udCB8fCBsb2FkZWRDdWJlbWFwLCBcclxuICAgICAgICAwLCAwLCBzc3osIFxyXG4gICAgICAgIDAsIDAsIDBcclxuICAgICAgKTtcclxuXHJcbiAgICBsZXQgYmFjayA9IFxyXG4gICAgICBncmFwaGljcy5jcmVhdGVGYWNlKFxyXG4gICAgICAgIHN4LCBzeSwgIFxyXG4gICAgICAgIGxvYWRlZEN1YmVtYXAuYmFjayB8fCBsb2FkZWRDdWJlbWFwLCBcclxuICAgICAgICAwLCAwLCAtc3N6LCBcclxuICAgICAgICAwLCAxODAsIDBcclxuICAgICAgKTtcclxuXHJcbiAgICBsZXQgcmlnaHQgPSBcclxuICAgICAgZ3JhcGhpY3MuY3JlYXRlRmFjZShcclxuICAgICAgICBzeiwgc3ksIFxyXG4gICAgICAgIGxvYWRlZEN1YmVtYXAucmlnaHQgfHwgbG9hZGVkQ3ViZW1hcCwgXHJcbiAgICAgICAgLXNzeCwgMCwgMCwgXHJcbiAgICAgICAgMCwgLTkwLCAwXHJcbiAgICAgICk7XHJcblxyXG4gICAgbGV0IGxlZnQgPSBcclxuICAgICAgZ3JhcGhpY3MuY3JlYXRlRmFjZShcclxuICAgICAgICBzeiwgc3ksICBcclxuICAgICAgICBsb2FkZWRDdWJlbWFwLmxlZnQgfHwgbG9hZGVkQ3ViZW1hcCwgXHJcbiAgICAgICAgc3N4LCAwLCAwLCBcclxuICAgICAgICAwLCA5MCwgMFxyXG4gICAgICApO1xyXG5cclxuICAgIGxldCB0b3AgPSBcclxuICAgICAgZ3JhcGhpY3MuY3JlYXRlRmFjZShcclxuICAgICAgICBzeCwgc3osICBcclxuICAgICAgICBsb2FkZWRDdWJlbWFwLnRvcCB8fCBsb2FkZWRDdWJlbWFwLCBcclxuICAgICAgICAwLCAtc3N5LCAwLCBcclxuICAgICAgICA5MCwgMCwgMFxyXG4gICAgICApO1xyXG5cclxuICAgIGxldCBib3R0b207XHJcblxyXG4gICAgaWYgKGJvdHRvbUxlc3MgPT09IGZhbHNlIHx8ICFib3R0b21MZXNzKSB7XHJcbiAgICAgIGJvdHRvbSA9IFxyXG4gICAgICAgIGdyYXBoaWNzLmNyZWF0ZUZhY2UoXHJcbiAgICAgICAgICBzeCwgc3osICBcclxuICAgICAgICAgIChsb2FkZWRDdWJlbWFwLmJvdHRvbSB8fCBsb2FkZWRDdWJlbWFwKSB8fCAnJywgXHJcbiAgICAgICAgICAwLCBzc3ksIDAsIFxyXG4gICAgICAgICAgZmxpcEJvdHRvbT8gOTAgOiAtOTAsIDAsIDBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZyb250LmZhY2VJZCA9IDA7XHJcbiAgICBiYWNrLmZhY2VJZCA9IDE7XHJcbiAgICByaWdodC5mYWNlSWQgPSAyO1xyXG4gICAgbGVmdC5mYWNlSWQgPSAzO1xyXG4gICAgdG9wLmZhY2VJZCA9IDQ7XHJcblxyXG4gICAgaWYgKGJvdHRvbUxlc3MgPT09IGZhbHNlIHx8ICFib3R0b21MZXNzKSB7XHJcbiAgICAgIGJvdHRvbS5mYWNlSWQgPSA1O1xyXG4gICAgfVxyXG5cclxuICAgIG1lc2gucHVzaChmcm9udCk7XHJcbiAgICBtZXNoLnB1c2goYmFjayk7XHJcbiAgICBtZXNoLnB1c2gocmlnaHQpO1xyXG4gICAgbWVzaC5wdXNoKGxlZnQpO1xyXG4gICAgbWVzaC5wdXNoKHRvcCk7XHJcblxyXG4gICAgaWYgKGJvdHRvbUxlc3MgPT09IGZhbHNlIHx8ICFib3R0b21MZXNzKSB7XHJcbiAgICAgIG1lc2gucHVzaChib3R0b20pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtZXNoO1xyXG4gIH07XHJcblxyXG4gIGdyYXBoaWNzLmNyZWF0ZUZhZGluZ1R1bm5lbCA9IGZ1bmN0aW9uKHN4LCBzeSwgc3osIHgsIHksIHosIHRleHR1cmUpIHtcclxuICAgIGxldCBtZXNoID0gW107XHJcblxyXG4gICAgbGV0IHNzeCA9IHN4IC8gMjtcclxuICAgIGxldCBzc3kgPSBzeSAvIDI7XHJcbiAgICBsZXQgc3N6ID0gc3ogLyAyO1xyXG5cclxuICAgIGxldCB0b3AgPSBncmFwaGljcy5jcmVhdGVGYWNlKFxyXG4gICAgICBzeCwgc3ksXHJcbiAgICAgIHRleHR1cmUsXHJcbiAgICAgIHgsIHksIHorc3N6LCBcclxuICAgICAgMCwgLTE4MCwgMFxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgYm90dG9tID0gZ3JhcGhpY3MuY3JlYXRlRmFjZShcclxuICAgICAgc3gsIHN5LFxyXG4gICAgICB0ZXh0dXJlLFxyXG4gICAgICB4LCB5LCB6LXNzeiwgXHJcbiAgICAgIDE4MCwgMTgwLCAtMTgwXHJcbiAgICApO1xyXG5cclxuICAgIGxldCByaWdodCA9IGdyYXBoaWNzLmNyZWF0ZUZhY2UoXHJcbiAgICAgIHN6LCBzeSxcclxuICAgICAgdGV4dHVyZSxcclxuICAgICAgeCtzc3gsIHksIHosXHJcbiAgICAgIDAsIC05MCwgMFxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgbGVmdCA9IGdyYXBoaWNzLmNyZWF0ZUZhY2UoXHJcbiAgICAgIHN6LCBzeSxcclxuICAgICAgdGV4dHVyZSxcclxuICAgICAgeC1zc3gsIHksIHosIFxyXG4gICAgICAwLCA5MCwgMFxyXG4gICAgKTtcclxuXHJcbiAgICB0b3AuZmFjZUlkID0gMjtcclxuICAgIGJvdHRvbS5mYWNlSWQgPSAzO1xyXG4gICAgcmlnaHQuZmFjZUlkID0gMDtcclxuICAgIGxlZnQuZmFjZUlkID0gMTtcclxuXHJcbiAgICBtZXNoLnB1c2godG9wKTtcclxuICAgIG1lc2gucHVzaChib3R0b20pO1xyXG4gICAgbWVzaC5wdXNoKHJpZ2h0KTtcclxuICAgIG1lc2gucHVzaChsZWZ0KTtcclxuXHJcbiAgICByZXR1cm4gbWVzaDtcclxuICB9O1xyXG5cclxuICBncmFwaGljcy5jYWxjdWxhdGVGYWNlc0xpZ2h0aW5nID0gZnVuY3Rpb24oZmFjZUFycmF5LCByLCBnLCBiLCBcclxuICAgIGFtYmllbnREYXJrbmVzcykge1xyXG4gICAgbGV0IGFtYmllbnQgPSBhbWJpZW50RGFya25lc3MgfHwgMS4wMjI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZhY2VBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgZmFjZSA9IGZhY2VBcnJheVtpXTtcclxuXHJcbiAgICAgIHIgLz0gYW1iaWVudDtcclxuICAgICAgZyAvPSBhbWJpZW50O1xyXG4gICAgICBiIC89IGFtYmllbnQ7XHJcblxyXG4gICAgICBmYWNlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFxyXG4gICAgICAgICdyZ2JhKCcgKyBcclxuICAgICAgICAgIHIudG9GaXhlZCgwKSArICcsICcgK1xyXG4gICAgICAgICAgZy50b0ZpeGVkKDApICsgJywgJyArXHJcbiAgICAgICAgICBiLnRvRml4ZWQoMCkgKyAnLCAxKSc7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmFwcGVuZEZhY2VzID0gZnVuY3Rpb24oZmFjZUFycmF5KSB7XHJcbiAgICBsZXQgaSA9IGZhY2VBcnJheS5sZW5ndGg7XHJcbiAgICB3aGlsZShpLS0pIHtcclxuICAgICAgdGhpcy5hcHBlbmRDaGlsZChmYWNlQXJyYXlbaV0uY2xvbmVOb2RlKCkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIEhUTUxFbGVtZW50LnByb3RvdHlwZS5nZXRGYWNlID0gZnVuY3Rpb24oZmFjZUlkKSB7XHJcbiAgICBsZXQgaSA9IHRoaXMuY2hpbGROb2Rlcy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUoaS0tKSB7XHJcbiAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5jaGlsZE5vZGVzW2ldO1xyXG4gICAgICBpZiAoY3VycmVudC5mYWNlSWQgPT09IGZhY2VJZCkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuXHJcbiAgSFRNTEVsZW1lbnQucHJvdG90eXBlLnNldFRpbnQgPSBmdW5jdGlvbihjb2xvcikge1xyXG4gICAgbGV0IGkgPSB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoO1xyXG4gICAgd2hpbGUoaS0tKSB7XHJcbiAgICAgIHRoaXMuY2hpbGROb2Rlc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2FsY3VsYXRlRmFrZUxpZ2h0aW5nID0gZnVuY3Rpb24oYW1iaWVudERhcmtuZXNzKSB7XHJcbiAgICBsZXQgYW1iaWVudCA9IGFtYmllbnREYXJrbmVzcyB8fCAxLjAyMjtcclxuXHJcbiAgICBsZXQgc2FtcGxlRmFjZUNvbG9yID0gdGhpcy5jaGlsZE5vZGVzWzBdLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcclxuICAgIGxldCBiYXNlQ29sb3I7XHJcbiAgICBpZiAoc2FtcGxlRmFjZUNvbG9yLnN0YXJ0c1dpdGgoJyMnKSkge1xyXG4gICAgICBiYXNlQ29sb3IgPSB1dGlscy5oZXhUb1JHQihzYW1wbGVGYWNlQ29sb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYmFzZUNvbG9yID0gdXRpbHMuY3NzQ29sb3JUb1JHQkEoc2FtcGxlRmFjZUNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgZmFjZSA9IHRoaXMuY2hpbGROb2Rlc1tpXTtcclxuXHJcbiAgICAgIGJhc2VDb2xvci5yIC89IGFtYmllbnQ7XHJcbiAgICAgIGJhc2VDb2xvci5nIC89IGFtYmllbnQ7XHJcbiAgICAgIGJhc2VDb2xvci5iIC89IGFtYmllbnQ7XHJcblxyXG4gICAgICBmYWNlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKCcgKyBiYXNlQ29sb3Iuci50b0ZpeGVkKDApICsgJywgJyArXHJcbiAgICAgICAgYmFzZUNvbG9yLmcudG9GaXhlZCgwKSArICcsICcgK1xyXG4gICAgICAgIGJhc2VDb2xvci5iLnRvRml4ZWQoMCkgKyAnLCAxKSc7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGdyYXBoaWNzO1xyXG5cclxufShcclxuICB3aW5kb3cudXRvcHkubWF0aHMsXHJcbiAgd2luZG93LnV0b3B5LnV0aWxzLFxyXG4gIHdpbmRvdy51dG9weS5jYW1lcmFcclxuKSk7XHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKXtcclxuICBjb25zdCBndWkgPSB7XHJcbiAgICByb290OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3VpJylcclxuICB9XHJcbiAgXHJcbiAgZ3VpLmNyZWF0ZUJ1dHRvbiA9ICggaW1nLCBcclxuICAgIHsgb25tb3VzZW92ZXIsIG9ubW91c2VsZWF2ZSwgb25tb3VzZWRvd24sIG9ubW91c2V1cCB9KSA9PiBcclxuICB7XHJcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgIFxyXG4gICAgYnRuLnN0eWxlLnRvcCA9ICcwJ1xyXG4gICAgYnRuLnN0eWxlLmxlZnQgPSAnMCdcclxuICAgIFxyXG4gICAgYnRuLnNyYyA9IGltZ1xyXG4gICAgXHJcbiAgICBidG4ub25tb3VzZW92ZXIgPSBvbm1vdXNlb3ZlclxyXG4gICAgYnRuLm9ubW91c2VsZWF2ZSA9IG9ubW91c2VsZWF2ZVxyXG4gICAgYnRuLm9ubW91c2Vkb3duID0gb25tb3VzZWRvd25cclxuICAgIGJ0bi5vbm1vdXNldXAgPSBvbm1vdXNldXBcclxuICAgIFxyXG4gICAgZ3VpLnJvb3QuYXBwZW5kQ2hpbGQoYnRuKVxyXG4gICAgXHJcbiAgICByZXR1cm4gYnRuXHJcbiAgfSBcclxuICBcclxuICBndWkuY3JlYXRlTGFiZWwgPSAodGV4dCkgPT4ge1xyXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGxhYmVsLmlubmVySFRNTCA9IHRleHRcclxuICAgIGd1aS5yb290LmFwcGVuZENoaWxkKGxhYmVsKVxyXG4gICAgXHJcbiAgICByZXR1cm4gbGFiZWxcclxuICB9XHJcbiAgXHJcbiAgZ3VpLmNyZWF0ZUltYWdlID0gKHNyYykgPT4ge1xyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBpbWcuc3JjID0gc3JjXHJcbiAgICBndWkucm9vdC5hcHBlbmRDaGlsZChpbWcpXHJcbiAgICByZXR1cm4gaW1nXHJcbiAgfVxyXG4gIFxyXG4gIGd1aS5yZW1vdmVFbGVtZW50ID0gZWwgPT4ge1xyXG4gICAgaWYgKGVsICE9PSB1bmRlZmluZWQpXHJcbiAgICAgIGVsLnJlbW92ZSgpXHJcbiAgfVxyXG4gIFxyXG4gIGd1aS5kZXN0cm95ID0gKCkgPT4ge1xyXG4gICAgd2hpbGUgKGd1aS5yb290LmNoaWxkRWxlbWVudENvdW50ICE9PSAwKSB7XHJcbiAgICAgIGxldCBlbCA9IGd1aS5yb290LmNoaWxkTm9kZXNbMF1cclxuICAgICAgXHJcbiAgICAgIGlmIChlbCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIGVsLnJlbW92ZSgpXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiBndWlcclxufSgpKVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcclxuICAgIFxyXG4gICAgY29uc3QgaW5wdXQgPSB7XHJcbiAgICAgICAga2V5c0Rvd246IFsyMjJdLCAvLyBJcyB0aGlzIGZhc3RlciB0aGFuIHVzaW5nIEFQUz9cclxuICAgICAgICBsYXN0S2V5Q29kZTogLTEsXHJcbiAgICAgICAgbGFzdEtleUhpdDogLTEsXHJcbiAgICAgICAgbGFzdEtleUp1c3RSZWxlYXNlZDogLTEsXHJcbiAgICAgICAgXHJcbiAgICAgICAga2V5czoge1xyXG4gICAgICAgICAgYTogNjUsXHJcbiAgICAgICAgICBiOiA2NixcclxuICAgICAgICAgIGM6IDY3LFxyXG4gICAgICAgICAgZDogNjgsXHJcbiAgICAgICAgICBlOiA2OSxcclxuICAgICAgICAgIGY6IDcwLFxyXG4gICAgICAgICAgZzogNzEsXHJcbiAgICAgICAgICBoOiA3MixcclxuICAgICAgICAgIGk6IDczLFxyXG4gICAgICAgICAgajogNzQsXHJcbiAgICAgICAgICBrOiA3NSxcclxuICAgICAgICAgIGw6IDc2LFxyXG4gICAgICAgICAgbTogNzcsXHJcbiAgICAgICAgICBuOiA3OCxcclxuICAgICAgICAgIG86IDc5LFxyXG4gICAgICAgICAgcDogODAsXHJcbiAgICAgICAgICBxOiA4MSxcclxuICAgICAgICAgIHI6IDgyLFxyXG4gICAgICAgICAgczogODMsXHJcbiAgICAgICAgICB0OiA4NCxcclxuICAgICAgICAgIHU6IDg1LFxyXG4gICAgICAgICAgdjogODYsXHJcbiAgICAgICAgICB3OiA4NyxcclxuICAgICAgICAgIHg6IDg4LFxyXG4gICAgICAgICAgeTogODksXHJcbiAgICAgICAgICB6OiA5MCxcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgc3BhY2U6IDMyLFxyXG4gICAgICAgICAgc2hpZnQ6IDE2LFxyXG4gICAgICAgICAgY3RybDogMTgsXHJcbiAgICAgICAgXHJcbiAgICAgICAgICB1cDogMzgsXHJcbiAgICAgICAgICBkb3duOiA0MCxcclxuICAgICAgICAgIHJpZ2h0OiAzOSxcclxuICAgICAgICAgIGxlZnQ6IDM3LFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB6ZXJvOiA0OCxcclxuICAgICAgICAgIG9uZTogNDksXHJcbiAgICAgICAgICB0d286IDUwLFxyXG4gICAgICAgICAgdGhyZWU6IDUxLFxyXG4gICAgICAgICAgZm91cjogNTIsXHJcbiAgICAgICAgICBmaXZlOiA1MyxcclxuICAgICAgICAgIHNpeDogNTQsXHJcbiAgICAgICAgICBzZXZlbjogNTUsXHJcbiAgICAgICAgICBlaWdodDogNTYsXHJcbiAgICAgICAgICBuaW5lOiA1N1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaXNUb3VjaGluZzogZmFsc2UsXHJcbiAgICAgICAgaGFzVGFwcGVkOiBmYWxzZSxcclxuICAgICAgICBoYXNSZWxlYXNlZFRhcDogZmFsc2UsXHJcbiAgICAgICAgaGFzU3dpcGVkOiBmYWxzZSxcclxuICAgICAgICBcclxuICAgICAgICBsYXN0U3dpcGU6IHtcclxuICAgICAgICAgICAgZnJvbVg6IDAsXHJcbiAgICAgICAgICAgIGZyb21ZOiAwLFxyXG4gICAgICAgICAgICB0b1g6IDAsXHJcbiAgICAgICAgICAgIHRvWTogMCxcclxuICAgICAgICAgICAgZHg6IDAsXHJcbiAgICAgICAgICAgIGR5OiAwLFxyXG4gICAgICAgICAgICBsZW5ndGg6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIFVzZWQgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgbW91c2Ugd2hlZWwgKi9cclxuICAgICAgICB3aGVlbERlbHRhOiAwXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpbnB1dC5nZXRLZXkgPSBmdW5jdGlvbihrZXlDb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIGlucHV0LmtleXNEb3duW2tleUNvZGVdO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgaW5wdXQuZ2V0S2V5SnVzdFByZXNzZWQgPSBmdW5jdGlvbihrZXlDb2RlKSB7XHJcbiAgICAgIGlmIChrZXlDb2RlICE9PSBpbnB1dC5sYXN0S2V5Q29kZSAmJiBpbnB1dC5nZXRLZXkoa2V5Q29kZSkpIHtcclxuICAgICAgICBpbnB1dC5rZXlzRG93bltrZXlDb2RlXSA9IGZhbHNlO1xyXG4gICAgICAgIGlucHV0Lmxhc3RLZXlDb2RlID0ga2V5Q29kZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgaW5wdXQuZ2V0S2V5SnVzdFJlbGVhc2VkID0gZnVuY3Rpb24oa2V5Q29kZSkge1xyXG4gICAgICAgIHJldHVybiBpbnB1dC5rZXlKdXN0UmVsZWFzZWQgPT09IGtleUNvZGU7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBvbktleURvd24oZXZlbnQpIHtcclxuICAgICAgbGV0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xyXG4gICAgICBcclxuICAgICAgaW5wdXQubGFzdEtleUhpdCA9IGV2ZW50LmtleUNvZGVcclxuICAgICAgXHJcbiAgICAgIGlmIChrZXlDb2RlID09PSAzMikge1xyXG4gICAgICAgIGlmKGV2ZW50LnByZXZlbnREZWZhdWx0KVxyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIFxyXG4gICAgICBpbnB1dC5rZXlzRG93bltrZXlDb2RlXSA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBvbktleVVwKGV2ZW50KSB7XHJcbiAgICAgIGxldCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcclxuICAgICAgXHJcbiAgICAgIGlucHV0Lmxhc3RLZXlIaXQgPSAtMVxyXG4gICAgICAgIFxyXG4gICAgICBpZihldmVudC5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGlmIChrZXlDb2RlID09PSAzMilcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaW5wdXQubGFzdEtleUNvZGUgPSAtMTtcclxuICAgICAgaW5wdXQua2V5SnVzdFJlbGVhc2VkID0ga2V5Q29kZTtcclxuICAgICAgaW5wdXQua2V5c0Rvd25ba2V5Q29kZV0gPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIG9uVG91Y2hTdGFydChldmVudCkge1xyXG4gICAgICAgIGxldCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlucHV0LmlzVG91Y2hpbmcgPSB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlucHV0Lmxhc3RTd2lwZS5mcm9tWCA9IHRvdWNoLmNsaWVudFg7XHJcbiAgICAgICAgaW5wdXQubGFzdFN3aXBlLmZyb21ZID0gdG91Y2guY2xpZW50WTtcclxuICAgICAgICBcclxuICAgICAgICBpbnB1dC5oYXNUYXBwZWQgPSB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGV2ZW50LmNhbmNlbEJ1YmJsZSkge1xyXG4gICAgICAgICAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIG9uVG91Y2hFbmQoZXZlbnQpIHtcclxuICAgICAgICBsZXQgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgICAgICBcclxuICAgICAgICBpbnB1dC5pc1RvdWNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaW5wdXQuaGFzUmVsZWFzZWRUYXAgPSB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlucHV0Lmxhc3RTd2lwZS50b1ggPSB0b3VjaC5jbGllbnRYO1xyXG4gICAgICAgIGlucHV0Lmxhc3RTd2lwZS50b1kgPSB0b3VjaC5jbGllbnRZO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB4RGlmZiA9IGlucHV0Lmxhc3RTd2lwZS50b1ggLSBpbnB1dC5sYXN0U3dpcGUuZnJvbVg7XHJcbiAgICAgICAgbGV0IHlEaWZmID0gaW5wdXQubGFzdFN3aXBlLnRvWSAtIGlucHV0Lmxhc3RTd2lwZS5mcm9tWTtcclxuICAgICAgXHJcbiAgICAgICAgaW5wdXQubGFzdFN3aXBlLmxlbmd0aCA9IFxyXG4gICAgICAgICAgTWF0aC5zcXJ0KCh4RGlmZiAqIHhEaWZmKSArICh5RGlmZiAqIHlEaWZmKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW5wdXQubGFzdFN3aXBlLmR4ID0geERpZmY7XHJcbiAgICAgICAgaW5wdXQubGFzdFN3aXBlLmR5ID0geURpZmY7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlucHV0Lmxhc3RTd2lwZS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgbGV0IG4gPSAxLjAgLyBpbnB1dC5sYXN0U3dpcGUubGVuZ3RoO1xyXG4gICAgICAgICAgICBpbnB1dC5sYXN0U3dpcGUuZHggKj0gbjtcclxuICAgICAgICAgICAgaW5wdXQubGFzdFN3aXBlLmR5ICo9IG47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlucHV0Lmhhc1N3aXBlZCA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpbnB1dC50YXBKdXN0UmVsZWFzZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoaW5wdXQuaGFzVGFwcGVkKSB7XHJcbiAgICAgICAgICAgIGlucHV0Lmhhc1RhcHBlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnB1dC5maW5pc2ggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpbnB1dC5oYXNTd2lwZWQgPSBmYWxzZTtcclxuICAgICAgICBpbnB1dC5oYXNUYXBwZWQgPSBmYWxzZTtcclxuICAgICAgICBpbnB1dC5oYXNSZWxlYXNlZFRhcCA9IGZhbHNlO1xyXG4gICAgICAgIGlucHV0LmtleUp1c3RSZWxlYXNlZCA9IC0xO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy93aW5kb3cuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSk7XHJcbiAgICAvL3dpbmRvdy5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgb25LZXlVcCwgZmFsc2UpO1xyXG4gICAgLy93aW5kb3cuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSk7XHJcbiAgICAvL3dpbmRvdy5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UpO1xyXG4gIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBvbktleVVwLCBmYWxzZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlKTtcclxuICAgIFxyXG4gICAgLypcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlucHV0LndoZWVsRGVsdGEgPSBldmVudC5kZWx0YS0zMCB8fCBldmVudC53aGVlbERlbHRhWS80O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAqL1xyXG4gICAgXHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICBcclxufSgpKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xyXG4gIC8qIENIRUNLOiBjYW4gdGhpcyBwcmVjaXNpb24gYmUgY2hvcHBlZCBvZmYgYSBsaXR0bGUgYml0IG1vcmU/ICovXHJcbiAgY29uc3QgbWF0aHMgPSB7XHJcbiAgICBUT19SQUQ6ICAwLjAxNzQ1MzI5MyxcclxuICAgIFRPX0RFRzogNTcuMjk1Nzc5NTEzLFxyXG4gICAgUEkyOiBNYXRoLlBJICogMlxyXG4gIH07XHJcblxyXG4gIG1hdGhzLlZlY3RvcjMgPSBmdW5jdGlvbih4LCB5LCB6KSB7XHJcbiAgICB0aGlzLnggPSB4IHx8IDA7XHJcbiAgICB0aGlzLnkgPSB5IHx8IDA7XHJcbiAgICB0aGlzLnogPSB6IHx8IDA7XHJcbiAgfTtcclxuXHJcbiAgbWF0aHMuVmVjdG9yMy5wcm90b3R5cGUgPSB7XHJcbiAgICBzZXQ6IGZ1bmN0aW9uKHgsIHksIHopIHtcclxuICAgICAgdGhpcy54ID0geCB8fCAwO1xyXG4gICAgICB0aGlzLnkgPSB5IHx8IDA7XHJcbiAgICAgIHRoaXMueiA9IHogfHwgMDtcclxuICAgIH0sXHJcblxyXG4gICAgY29weTogZnVuY3Rpb24ob3RoZXIpIHtcclxuICAgICAgdGhpcy5zZXQob3RoZXIueCwgb3RoZXIueSwgb3RoZXIueik7XHJcbiAgICB9LFxyXG5cclxuICAgIGVxdWFsOiBmdW5jdGlvbihvdGhlcikge1xyXG4gICAgICByZXR1cm4gdGhpcy54ID09PSBvdGhlci54ICYmXHJcbiAgICAgICAgdGhpcy55ID09PSBvdGhlci55ICYmXHJcbiAgICAgICAgdGhpcy56ID09PSBvdGhlci56O1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGQ6IGZ1bmN0aW9uKHgsIHksIHopIHtcclxuICAgICAgdGhpcy54ICs9IHggfHwgMDtcclxuICAgICAgdGhpcy55ICs9IHkgfHwgMDtcclxuICAgICAgdGhpcy56ICs9IHogfHwgMDtcclxuICAgIH0sXHJcblxyXG4gICAgYWRkVmVjOiBmdW5jdGlvbihvdGhlcikge1xyXG4gICAgICB0aGlzLmFkZChvdGhlci54LCBvdGhlci55LCBvdGhlci56KTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHN1YjogZnVuY3Rpb24oeCwgeSwgeikge1xyXG4gICAgICB0aGlzLnggLT0geCB8fCAwO1xyXG4gICAgICB0aGlzLnkgLT0geSB8fCAwO1xyXG4gICAgICB0aGlzLnogLT0geiB8fCAwO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdWJWZWM6IGZ1bmN0aW9uKG90aGVyKSB7XHJcbiAgICAgIHRoaXMuc3ViKG90aGVyLngsIG90aGVyLnksIG90aGVyLnopO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgbXVsOiBmdW5jdGlvbih4LCB5LCB6KSB7XHJcbiAgICAgIHRoaXMueCAqPSB4IHx8IDA7XHJcbiAgICAgIHRoaXMueSAqPSB5IHx8IDA7XHJcbiAgICAgIHRoaXMueiAqPSB6IHx8IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIG11bFZlYzogZnVuY3Rpb24ob3RoZXIpIHtcclxuICAgICAgdGhpcy5tdWwob3RoZXIueCwgb3RoZXIueSwgb3RoZXIueik7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBkaXY6IGZ1bmN0aW9uKHgsIHksIHopIHtcclxuICAgICAgdGhpcy54IC89IHggfHwgMTtcclxuICAgICAgdGhpcy55IC89IHkgfHwgMTtcclxuICAgICAgdGhpcy56IC89IHogfHwgMTtcclxuICAgIH0sXHJcblxyXG4gICAgZGl2VmVjOiBmdW5jdGlvbihvdGhlcikge1xyXG4gICAgICB0aGlzLmRpdihvdGhlci54LCBvdGhlci55LCBvdGhlci56KTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHNjYWxlOiBmdW5jdGlvbihzKSB7XHJcbiAgICAgIHRoaXMueCAqPSBzO1xyXG4gICAgICB0aGlzLnkgKj0gcztcclxuICAgICAgdGhpcy56ICo9IHM7XHJcbiAgICB9LFxyXG5cclxuICAgIG5lZ2F0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuc2NhbGUoLTEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBkb3Q6IGZ1bmN0aW9uKG90aGVyKSB7XHJcbiAgICAgIHJldHVybiAodGhpcy54ICogb3RoZXIueCkgKyBcclxuICAgICAgICAodGhpcy55ICogb3RoZXIueSkgKyBcclxuICAgICAgICAodGhpcy56ICogb3RoZXIueik7XHJcbiAgICB9LFxyXG5cclxuICAgIGxlbmd0aFNxcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRvdCh0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgbGVuZ3RoOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmxlbmd0aFNxcigpKTtcclxuICAgIH0sXHJcblxyXG4gICAgbm9ybWFsaXplOiBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IGxlbiA9IHRoaXMubGVuZ3RoKCk7XHJcblxyXG4gICAgICBpZiAobGVuICE9PSAwKSB7XHJcbiAgICAgICAgbGV0IG4gPSAxLjAgLyBsZW47XHJcbiAgICAgICAgdGhpcy5zY2FsZShuKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBkaXN0YW5jZVRvU3FyOiBmdW5jdGlvbihvdGhlcikge1xyXG4gICAgICBsZXQgZGlzdGFuY2UgPSBuZXcgbWF0aHMuVmVjdG9yMyggXHJcbiAgICAgICAgb3RoZXIueCAtIHRoaXMueCxcclxuICAgICAgICBvdGhlci55IC0gdGhpcy55LFxyXG4gICAgICAgIG90aGVyLnogLSB0aGlzLnpcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJldHVybiBkaXN0YW5jZS5sZW5ndGhTcXIoKTtcclxuICAgIH0sXHJcblxyXG4gICAgZGlzdGFuY2VUbzogZnVuY3Rpb24ob3RoZXIpIHtcclxuICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlVG9TcXIob3RoZXIpKTtcclxuICAgIH0sXHJcblxyXG4gICAgYW5nbGVYWjogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueiwgdGhpcy54KTtcclxuICAgIH0sXHJcblxyXG4gICAgYW5nbGVZWjogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueiwgdGhpcy55KTtcclxuICAgIH0sXHJcblxyXG4gICAgYW5nbGVZWDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcclxuICAgIH0sXHJcblxyXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gJygnICsgdGhpcy54ICsgJywgJyArIHRoaXMueSArICcsICcgKyB0aGlzLnogKyAnKSc7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbWF0aHMuVHJhbnNmb3JtID0gZnVuY3Rpb24oeCwgeSwgeiwgcngsIHJ5LCByeiwgc3gsIHN5LCBzeiwgc2t4LCBza3kpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBuZXcgbWF0aHMuVmVjdG9yMyh4LCB5LCB6KTtcclxuICAgIHRoaXMub2Zmc2V0ID0gbmV3IG1hdGhzLlZlY3RvcjMoMCwgMCwgMClcclxuICAgIHRoaXMucm90YXRpb24gPSBuZXcgbWF0aHMuVmVjdG9yMyhyeCwgcnksIHJ6KTtcclxuICAgIHRoaXMuc2NhbGUgPSBuZXcgbWF0aHMuVmVjdG9yMyhzeCB8fCAxLCBzeSB8fCAxLCBzeiB8fCAxKTtcclxuICAgIHRoaXMuc2tldyA9IHsgXHJcbiAgICAgIHg6IHNreCB8fCAwLCBcclxuICAgICAgeTogc2t5IHx8IDAgXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucHJldlBvc2l0aW9uID0gbmV3IG1hdGhzLlZlY3RvcjMoeCwgeSwgeik7XHJcbiAgICB0aGlzLnByZXZSb3RhdGlvbiA9IG5ldyBtYXRocy5WZWN0b3IzKHJ4LCByeSwgcnopO1xyXG4gICAgdGhpcy5wcmV2U2NhbGUgPSBuZXcgbWF0aHMuVmVjdG9yMyhzeCB8fCAxLCBzeSB8fCAxLCBzeiB8fCAxKTtcclxuICAgIHRoaXMucHJldlNrZXcgPSB7IHg6IHRoaXMuc2tldy54LCB5OiB0aGlzLnNrZXcueSB9O1xyXG5cclxuICAgIHRoaXMuY3NzUG9zaXRpb24gPSAnJztcclxuICAgIHRoaXMuY3NzUm90YXRpb24gPSAnJztcclxuICAgIHRoaXMuY3NzU2NhbGUgPSAnJztcclxuICAgIHRoaXMuY3NzU2tldyA9ICcnO1xyXG5cclxuICAgIHRoaXMuY3NzID0gJyc7XHJcbiAgICB0aGlzLmJvdW5kRWxlbWVudCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9O1xyXG5cclxuICBtYXRocy5UcmFuc2Zvcm0uc3RyaW5naWZ5ID0gZnVuY3Rpb24oeCwgeSwgeiwgcngsIHJ5LCByeiwgc3gsIHN5LCBzeiwgXHJcbiAgICBza3gsIHNreSkgXHJcbiAge1xyXG4gICAgcmV0dXJuIGBza2V3KCR7c2t4IHx8IDB9ZGVnLCAke3NreSB8fCAwfWRlZylcclxuICAgIHNjYWxlM2QoJHtzeCB8fCAwfSwgJHtzeSB8fCAwfSwgJHtzeiB8fCAwfSlcclxuICAgIHRyYW5zbGF0ZTNkKCR7eCB8fCAwIH1weCwgJHt5IHx8IDB9cHgsICR7eiB8fCAwfXB4KVxyXG4gICAgcm90YXRlWCgke3J4IHx8IDB9ZGVnKSByb3RhdGVZKCR7cnkgfHwgMH1kZWcpIHJvdGF0ZVooJHtyeiB8fCAwfWRlZylgXHJcbiAgfVxyXG5cclxuICBtYXRocy5UcmFuc2Zvcm0ucHJvdG90eXBlID0ge1xyXG4gICAgYmluZEVsZW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5ib3VuZEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXQ6IGZ1bmN0aW9uKHgsIHksIHosIHJ4LCByeSwgcnosIHN4LCBzeSwgc3osIHNreCwgc2t5KSB7XHJcbiAgICAgIHRoaXMucG9zaXRpb24uc2V0KHggfHwgMCwgeSB8fCAwLCB6IHx8IDApO1xyXG4gICAgICB0aGlzLnJvdGF0aW9uLnNldChyeCB8fCAwLCByeSB8fCAwLCByeiB8fCAwKTtcclxuICAgICAgdGhpcy5zY2FsZS5zZXQoc3ggfHwgMSwgc3kgfHwgMSwgc3ogfHwgMSk7XHJcbiAgICAgIHRoaXMuc2tldy54ID0gc2t4IHx8IDA7XHJcbiAgICAgIHRoaXMuc2tldy55ID0gc2t5IHx8IDA7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldExhenk6IGZ1bmN0aW9uKHgsIHksIHosIHJ4LCByeSwgcnosIHN4LCBzeSwgc3osIHNreCwgc2t5KSB7XHJcbiAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHksIHopO1xyXG4gICAgICB0aGlzLnJvdGF0aW9uLnNldChyeCwgcnksIHJ6KTtcclxuICAgICAgdGhpcy5zY2FsZS5zZXQoc3ggfHwgMSwgc3kgfHwgMSwgc3ogfHwgMSk7XHJcbiAgICAgIHRoaXMuc2tldy54ID0gc2t4IHx8IDA7XHJcbiAgICAgIHRoaXMuc2tldy55ID0gc2t5IHx8IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldFBvc2l0aW9uOiBmdW5jdGlvbih4LCB5LCB6KSB7XHJcbiAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHksIHopO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNTU1Bvc2l0aW9uKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldFBvc2l0aW9uTGF6eTogZnVuY3Rpb24oeCwgeSwgeikge1xyXG4gICAgICB0aGlzLnBvc2l0aW9uLnNldCh4LCB5LCB6KTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0Um90YXRpb246IGZ1bmN0aW9uKHgsIHksIHopIHtcclxuICAgICAgdGhpcy5yb3RhdGlvbi5zZXQoeCwgeSwgeik7XHJcbiAgICAgIHRoaXMudXBkYXRlQ1NTUm90YXRpb24oKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0Um90YXRpb25MYXp5OiBmdW5jdGlvbih4LCB5LCB6KSB7XHJcbiAgICAgIHRoaXMucm90YXRpb24uc2V0KHgsIHksIHopO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRTY2FsZTogZnVuY3Rpb24oeCwgeSwgeikge1xyXG4gICAgICB0aGlzLnNjYWxlLnNldCh4LCB5LCB6KTtcclxuICAgICAgdGhpcy51cGRhdGVDU1NTY2FsZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRTY2FsZUxhenk6IGZ1bmN0aW9uKHgsIHksIHopIHtcclxuICAgICAgdGhpcy5zY2FsZS5zZXQoeCwgeSwgeik7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldFNrZXdpbmc6IGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgICAgdGhpcy5za2V3LnggPSB4O1xyXG4gICAgICB0aGlzLnNrZXcueSA9IHk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ1NTU2tld2luZygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRTa2V3aW5nTGF6eTogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgICB0aGlzLnNrZXcueCA9IHg7XHJcbiAgICAgIHRoaXMuc2tldy55ID0geTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlQ1NTUG9zaXRpb246IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmNzc1Bvc2l0aW9uID0gYHRyYW5zbGF0ZTNkKCR7dGhpcy5wb3NpdGlvbi54K3RoaXMub2Zmc2V0Lnh9cHgsXHJcbiAgICAgICAgJHt0aGlzLnBvc2l0aW9uLnkrdGhpcy5vZmZzZXQueX1weCwgXHJcbiAgICAgICAgJHt0aGlzLnBvc2l0aW9uLnordGhpcy5vZmZzZXQuen1weClgXHJcbiAgICAgIHRoaXMudXBkYXRlQ1NTKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZUNTU1JvdGF0aW9uOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5jc3NSb3RhdGlvbiA9IGByb3RhdGVYKCR7dGhpcy5yb3RhdGlvbi54fWRlZykgXHJcbiAgICAgIHJvdGF0ZVkoJHt0aGlzLnJvdGF0aW9uLnl9ZGVnKSBcclxuICAgICAgcm90YXRlWigke3RoaXMucm90YXRpb24uen1kZWcpYDtcclxuICAgICAgdGhpcy51cGRhdGVDU1MoKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlQ1NTU2NhbGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmNzc1NjYWxlID0gYHNjYWxlM2QoJHt0aGlzLnNjYWxlLnh9LFxyXG4gICAgICAgICR7dGhpcy5zY2FsZS55fSxcclxuICAgICAgICAke3RoaXMuc2NhbGUuen0pYFxyXG4gICAgICB0aGlzLnVwZGF0ZUNTUygpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVDU1NTa2V3aW5nOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5jc3NTa2V3ID0gYHNrZXcoJHt0aGlzLnNrZXcueH1kZWcsICR7dGhpcy5za2V3Lnl9ZGVnKWBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlQ1NTOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5jc3MgPSBcclxuICAgICAgICBgJHt0aGlzLmNzc1NrZXd9IFxyXG4gICAgICAgICAke3RoaXMuY3NzU2NhbGV9IFxyXG4gICAgICAgICAke3RoaXMuY3NzUG9zaXRpb259IFxyXG4gICAgICAgICAke3RoaXMuY3NzUm90YXRpb259YFxyXG5cclxuICAgICAgaWYgKHRoaXMuYm91bmRFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5ib3VuZEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdGhpcy5jc3M7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy51cGRhdGVDU1NQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNTU1JvdGF0aW9uKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ1NTU2NhbGUoKTtcclxuICAgICAgdGhpcy51cGRhdGVDU1NTa2V3aW5nKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ1NTKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZVByZXZpb3VzUG9zaXRpb246IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnByZXZQb3NpdGlvbi5jb3B5KHRoaXMucG9zaXRpb24pO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVQcmV2aW91c1JvdGF0aW9uOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5wcmV2Um90YXRpb24uY29weSh0aGlzLnJvdGF0aW9uKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlUHJldmlvdXNTY2FsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMucHJldlNjYWxlLmNvcHkodGhpcy5zY2FsZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZVByZXZpb3VzU2tld2luZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMucHJldlNrZXcueCA9IHRoaXMuc2tldy54O1xyXG4gICAgICB0aGlzLnByZXZTa2V3LnkgPSB0aGlzLnNrZXcueTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlUHJldmlvdXM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnByZXZQb3NpdGlvbi5jb3B5KHRoaXMucG9zaXRpb24pO1xyXG4gICAgICB0aGlzLnByZXZSb3RhdGlvbi5jb3B5KHRoaXMucm90YXRpb24pO1xyXG4gICAgICB0aGlzLnByZXZTY2FsZS5jb3B5KHRoaXMuc2NhbGUpO1xyXG4gICAgICB0aGlzLnByZXZTa2V3LnggPSB0aGlzLnNrZXcueDtcclxuICAgICAgdGhpcy5wcmV2U2tldy55ID0gdGhpcy5za2V3Lnk7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhc0NoYW5nZWRQb3NpdGlvbjogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiAoIXRoaXMucHJldlBvc2l0aW9uLmVxdWFsKHRoaXMucG9zaXRpb24pKTtcclxuICAgIH0sXHJcblxyXG4gICAgaGFzQ2hhbmdlZFJvdGF0aW9uOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuICghdGhpcy5wcmV2Um90YXRpb24uZXF1YWwodGhpcy5yb3RhdGlvbikpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYXNDaGFuZ2VkU2NhbGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gKCF0aGlzLnByZXZTY2FsZS5lcXVhbCh0aGlzLnNjYWxlKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhc0NoYW5nZWRTa2V3aW5nOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuICh0aGlzLnByZXZTa2V3LnggIT0gdGhpcy5za2V3LnggfHwgXHJcbiAgICAgICAgdGhpcy5wcmV2U2tldy55ICE9IHRoaXMuc2tldy55KTtcclxuICAgIH0sXHJcblxyXG4gICAgaGFzQ2hhbmdlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiAodGhpcy5oYXNDaGFuZ2VkUG9zaXRpb24oKSB8fCBcclxuICAgICAgICB0aGlzLmhhc0NoYW5nZWRQb3NpdGlvbigpIHx8XHJcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkUG9zaXRpb24oKSB8fFxyXG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZFNrZXdpbmcoKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGxhenlVcGRhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5oYXNDaGFuZ2VkUG9zaXRpb24oKSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUHJldmlvdXNQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ1NTUG9zaXRpb24oKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlZFJvdGF0aW9uKCkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVByZXZpb3VzUm90YXRpb24oKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNTU1JvdGF0aW9uKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmhhc0NoYW5nZWRTY2FsZSgpKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQcmV2aW91c1NjYWxlKCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMudXBkYXRlQ1NTU2NhbGUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlZFNrZXdpbmcoKSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUHJldmlvdXNTa2V3aW5nKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDU1NTa2V3aW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH0sICAgICAgICBcclxuXHJcbiAgfTtcclxuXHJcbiAgbWF0aHMubGVycCA9IGZ1bmN0aW9uKGZyb20sIHRvLCB0aW1lKSB7XHJcbiAgICByZXR1cm4gZnJvbSArIHRpbWUgKiAodG8gLSBmcm9tKTtcclxuICB9O1xyXG5cclxuICAvKiBXYXJuaW5nOiBIYWNraXNoIGFuZCBub3QgcHJlY2lzZSEgKi9cclxuICBtYXRocy5mYXN0TGVycCA9IGZ1bmN0aW9uKGZyb20sIHRvLCB0aW1lKSB7XHJcbiAgICBsZXQgc3RlcCA9IHRvIC0gZnJvbTtcclxuICAgIGlmIChNYXRoLmFicyhzdGVwKSA8PSAwLjEpIHJldHVybiB0bztcclxuICAgIHJldHVybiBmcm9tICsgdGltZSAqIHN0ZXA7XHJcbiAgfTtcclxuXHJcbiAgbWF0aHMuY2xhbXAgPSBmdW5jdGlvbih2YWx1ZSwgbWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChtaW4sIHZhbHVlKSwgbWF4KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gbWF0aHM7XHJcblxyXG59KCkpO1xyXG5cclxuXHJcblxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbih1dG9weSwgaW5wdXQsIGdyYXBoaWNzLCBhc3NldHMsIHdvcmxkLCBvYmplY3RzLCBjYW1lcmEsIG1hdGhzLCBzaGFyZWQpIHtcclxuICBjb25zdCBtZW51ID0ge307XHJcbiAgICBcclxuICBtZW51Lm1lc2hlcyA9IHtcclxuICAgIGxvZ286IGdyYXBoaWNzLmNyZWF0ZUZhY2UoNTEyLCA1MTIsIGFzc2V0cy50ZXh0dXJlcy5tZW51TG9nbyksXHJcbiAgICBidG5TaW5nbGVQbGF5ZXI6IGdyYXBoaWNzLmNyZWF0ZUZhY2UoMTI4LCAxMjgsIGFzc2V0cy50ZXh0dXJlcy5idG5TaW5nbGVQbGF5ZXIpLFxyXG4gICAgYnRuTXVsdGlQbGF5ZXI6IGdyYXBoaWNzLmNyZWF0ZUZhY2UoMTI4LCAxMjgsIGFzc2V0cy50ZXh0dXJlcy5idG5NdWx0aVBsYXllciksXHJcbiAgICBidG5RdWVzdGlvbjogZ3JhcGhpY3MuY3JlYXRlRmFjZSgxMjgsIDEyOCwgYXNzZXRzLnRleHR1cmVzLmJ0blF1ZXN0aW9uKSxcclxuICAgIGJ0bkNvbmZpZzogZ3JhcGhpY3MuY3JlYXRlRmFjZSgxMjgsIDEyOCwgYXNzZXRzLnRleHR1cmVzLmJ0bkNvbmZpZyksXHJcbiAgICBidG5DbG9zZTogZ3JhcGhpY3MuY3JlYXRlRmFjZSg2NCwgNjQsIGFzc2V0cy50ZXh0dXJlcy5idG5DbG9zZSksXHJcbiAgICB0dXRvcmlhbDogZ3JhcGhpY3MuY3JlYXRlRmFjZSgxMjgsIDEyOCwgYXNzZXRzLnRleHR1cmVzLnR1dG9yaWFsKSxcclxuICAgIGNvbmZpZzogZ3JhcGhpY3MuY3JlYXRlRmFjZSgxMjgsIDEyOCwgYXNzZXRzLnRleHR1cmVzLmNvbmZpZyksXHJcbiAgICBiYWNrZ3JvdW5kOiBncmFwaGljcy5jcmVhdGVGYWNlKDEyOCwgMTI4LCBhc3NldHMudGV4dHVyZXMubWVudUJhY2tncm91bmQpXHJcbiAgfTtcclxuICAgIFxyXG4gIGxldCBiZywgXHJcbiAgICBsb2dvLCBcclxuICAgIGJ0blBsYXlTaW5nbGUsIFxyXG4gICAgYnRuUGxheU11bHRpLCBcclxuICAgIGJ0blF1ZXN0aW9uLCBcclxuICAgIGJ0bkNvbmZpZywgXHJcbiAgICBidG5DbG9zZVR1dCwgXHJcbiAgICBidG5DbG9zZUNvbmZpZywgXHJcbiAgICB0dXRvcmlhbCwgXHJcbiAgICBjb25maWcsXHJcbiAgICBwMUFjdGlvbkJveCxcclxuICAgIHAyQWN0aW9uQm94LFxyXG4gICAga2V5R2V0dGluZz0nJztcclxuXHJcbiAgbWVudS5pbml0ID0gZnVuY3Rpb24oaW5pdCkge1xyXG4gICAgdXRvcHkuc2hhcmVkLnNpbXVsYXRpb24udGltZVNjYWxlID0gMVxyXG4gICAgY2FtZXJhLnNldFJvdGF0aW9uKDAsIDAsIDApO1xyXG4gICAgY2FtZXJhLnNldFBvc2l0aW9uKDAsIDAsIDApO1xyXG4gICAgY2FtZXJhLnpvb20oMSk7XHJcbiAgICBcclxuICAgIGdyYXBoaWNzLnNldEJhY2tncm91bmRDb2xvcignYmxhY2snKTtcclxuICAgIFxyXG4gICAgYmcgPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IG1lbnUubWVzaGVzLmJhY2tncm91bmQsIFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoKSwgXHJcbiAgICAgIHNjYWxlOiBuZXcgbWF0aHMuVmVjdG9yMyg2LCA4LCAwKVxyXG4gICAgfSlcclxuICAgIHdvcmxkLmFkZChiZylcclxuICAgIFxyXG4gICAgdHV0b3JpYWwgPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IG1lbnUubWVzaGVzLnR1dG9yaWFsLCBcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKDAsIDAsIDEpLCBcclxuICAgICAgc2NhbGU6IG5ldyBtYXRocy5WZWN0b3IzKDQsIDQsIDQpLFxyXG4gICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgdHV0b3JpYWwubWVzaC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICB0dXRvcmlhbC5zZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgICBidG5DbG9zZVR1dC5zZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIHdvcmxkLmFkZCh0dXRvcmlhbClcclxuICAgIFxyXG4gICAgY29uZmlnID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBtZW51Lm1lc2hlcy5jb25maWcsIFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoMCwgMCwgMSksIFxyXG4gICAgICBzY2FsZTogbmV3IG1hdGhzLlZlY3RvcjMoNCwgNCwgNCksXHJcbiAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBsZXQgY29uZlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uZlRleHQuY2xhc3NMaXN0LmFkZCgndGV4dC1jb25maWcnKVxyXG4gICAgY29uZlRleHQuaW5uZXJIVE1MID0gJ1NldHVwJ1xyXG4gICAgY29uZlRleHQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTU1cHgpJ1xyXG4gICAgXHJcbiAgICBsZXQgaW5mb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgaW5mb1RleHQuY2xhc3NMaXN0LmFkZCgnd2FybmluZy10ZXh0JylcclxuICAgIGluZm9UZXh0LmlubmVySFRNTCA9ICdUaGlzIGdhbWUgdXNlcyBDU1MzRCB0ZWNobm9sb2d5LiBUaGlzICpNQVkqIHJlcXVpcmUgdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIEdvb2dsZSBDaHJvbWUgYW5kIGRlY2VudCBoYXJkd2FyZSB0byBydW4gc21vb3RobHkuJ1xyXG4gICAgaW5mb1RleHQuc3R5bGUud2lkdGggPSAnMTIwcHgnXHJcbiAgICBpbmZvVGV4dC5zdHlsZS5mb250U2l6ZSA9ICc4cHgnXHJcbiAgICBpbmZvVGV4dC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgzNXB4KSdcclxuICAgIFxyXG4gICAgbGV0IHAxQWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHAxQWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtY29uZmlnJylcclxuICAgIHAxQWN0aW9uLmlubmVySFRNTCA9ICdCTFVFIGFjdGlvbiBrZXk6ICdcclxuICAgIHAxQWN0aW9uLnN0eWxlLmZvbnRTaXplID0gJzhweCdcclxuICAgIHAxQWN0aW9uLnN0eWxlLnRleHRTaGFkb3cgPSAnMHB4IDFweCAjMDA4ODk5J1xyXG4gICAgcDFBY3Rpb24uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTI4cHgpIHRyYW5zbGF0ZVkoLTI1cHgpJ1xyXG4gICAgXHJcbiAgICBsZXQgcDJBY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgcDJBY3Rpb24uY2xhc3NMaXN0LmFkZCgndGV4dC1jb25maWcnKVxyXG4gICAgcDJBY3Rpb24uaW5uZXJIVE1MID0gJ1JFRCBhY3Rpb24ga2V5OiAnXHJcbiAgICBwMkFjdGlvbi5zdHlsZS5mb250U2l6ZSA9ICc4cHgnXHJcbiAgICBwMkFjdGlvbi5zdHlsZS50ZXh0U2hhZG93ID0gJzBweCAxcHggIzk5MDA4OCdcclxuICAgIHAyQWN0aW9uLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0zMHB4KSB0cmFuc2xhdGVZKC01cHgpJ1xyXG4gICAgXHJcbiAgICBwMUFjdGlvbkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBwMUFjdGlvbkJveC5jbGFzc0xpc3QuYWRkKCdhY3Rpb24ta2V5LWJveCcpXHJcbiAgICBsZXQgayA9IFN0cmluZy5mcm9tQ2hhckNvZGUoc2hhcmVkLmJsdWVBY3Rpb25LZXkpXHJcbiAgICBwMUFjdGlvbkJveC5pbm5lckhUTUwgPSBrID09PSAnICcgPyAnU1BBQ0UnIDoga1xyXG4gICAgcDFBY3Rpb25Cb3guc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMzRweCkgdHJhbnNsYXRlWSgtMjVweCknXHJcbiAgICBwMUFjdGlvbkJveC5vbmNsaWNrID0gKCkgPT4gZ2V0Qmx1ZUFjdGlvbktleSgpXHJcbiAgICBcclxuICAgIHAyQWN0aW9uQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHAyQWN0aW9uQm94LmNsYXNzTGlzdC5hZGQoJ2FjdGlvbi1rZXktYm94JylcclxuICAgIGsgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHNoYXJlZC5yZWRBY3Rpb25LZXkpXHJcbiAgICBwMkFjdGlvbkJveC5pbm5lckhUTUwgPSBrID09PSAnICcgPyAnU1BBQ0UnIDoga1xyXG4gICAgcDJBY3Rpb25Cb3guc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMzRweCkgdHJhbnNsYXRlWSgtNXB4KSdcclxuICAgIHAyQWN0aW9uQm94Lm9uY2xpY2sgPSAoKSA9PiBnZXRSZWRBY3Rpb25LZXkoKVxyXG4gICAgXHJcbiAgICBjb25maWcubWVzaC5hcHBlbmRDaGlsZChjb25mVGV4dClcclxuICAgIGNvbmZpZy5tZXNoLmFwcGVuZENoaWxkKHAxQWN0aW9uKVxyXG4gICAgY29uZmlnLm1lc2guYXBwZW5kQ2hpbGQocDJBY3Rpb24pXHJcbiAgICBjb25maWcubWVzaC5hcHBlbmRDaGlsZChwMUFjdGlvbkJveClcclxuICAgIGNvbmZpZy5tZXNoLmFwcGVuZENoaWxkKHAyQWN0aW9uQm94KVxyXG4gICAgY29uZmlnLm1lc2guYXBwZW5kQ2hpbGQoaW5mb1RleHQpXHJcbiAgICB3b3JsZC5hZGQoY29uZmlnKVxyXG4gICAgXHJcbiAgICBiZy5tZXNoLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIHR1dG9yaWFsLnNldFZpc2libGUoZmFsc2UpXHJcbiAgICAgIGNvbmZpZy5zZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgICBidG5DbG9zZUNvbmZpZy5zZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgICBidG5DbG9zZVR1dC5zZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsb2dvID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7ZmFjZXM6IG1lbnUubWVzaGVzLmxvZ28sIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygwLCAtODAsIDApfSk7XHJcbiAgICB3b3JsZC5hZGQobG9nbyk7XHJcbiAgICBcclxuICAgIGJ0blBsYXlTaW5nbGUgPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IG1lbnUubWVzaGVzLmJ0blNpbmdsZVBsYXllciwgXHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygtNzAsIDE4MCwgMClcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBidG5QbGF5U2luZ2xlLm1lc2gub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvL3V0b3B5LnN3aXRjaFN0YXRlKCdzaW5nbGVjaGFyc2VsZWN0c3RhdGUnKTtcclxuICAgICAgdXRvcHkuc3dpdGNoU3RhdGUoJ2NoYXJzZWxlY3RzdGF0ZScpO1xyXG4gICAgICAvL1RFU1RJTkdcclxuICAgICAgc2hhcmVkLnNlbGVjdGVkR2FtZU1vZGUgPSAnc2luZ2xlJztcclxuICAgIH07XHJcbiAgICBcclxuICAgIGJ0blBsYXlTaW5nbGUubWVzaC5vbm1vdXNlZW50ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgYnRuUGxheVNpbmdsZS5zY2FsZS5zZXQoMS4zLCAxLjMsIDEuMyk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBidG5QbGF5U2luZ2xlLm1lc2gub25tb3VzZWxlYXZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGJ0blBsYXlTaW5nbGUuc2NhbGUuc2V0KDEsIDEsIDEpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgYnRuUGxheU11bHRpID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBtZW51Lm1lc2hlcy5idG5NdWx0aVBsYXllciwgXHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMyg3MCwgMTgwLCAwKVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGJ0blBsYXlNdWx0aS5tZXNoLm9ubW91c2VlbnRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBidG5QbGF5TXVsdGkuc2NhbGUuc2V0KDEuMywgMS4zLCAxLjMpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgYnRuUGxheU11bHRpLm1lc2gub25tb3VzZWxlYXZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGJ0blBsYXlNdWx0aS5zY2FsZS5zZXQoMSwgMSwgMSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBidG5QbGF5TXVsdGkubWVzaC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHV0b3B5LnN3aXRjaFN0YXRlKCdjaGFyc2VsZWN0c3RhdGUnKTtcclxuICAgICAgc2hhcmVkLnNlbGVjdGVkR2FtZU1vZGUgPSAnbXVsdGknO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgYnRuUXVlc3Rpb24gPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IG1lbnUubWVzaGVzLmJ0blF1ZXN0aW9uLCBcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKC03MCwgMzEwLCAwKVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGJ0blF1ZXN0aW9uLm1lc2gub25tb3VzZWVudGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGJ0blF1ZXN0aW9uLnNjYWxlLnNldCgxLjMsIDEuMywgMS4zKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGJ0blF1ZXN0aW9uLm1lc2gub25tb3VzZWxlYXZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGJ0blF1ZXN0aW9uLnNjYWxlLnNldCgxLCAxLCAxKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGJ0blF1ZXN0aW9uLm1lc2gub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBzaG93VHV0b3JpYWwoKVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgYnRuQ29uZmlnID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBtZW51Lm1lc2hlcy5idG5Db25maWcsIFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoNzAsIDMwMCwgMClcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBidG5Db25maWcubWVzaC5vbm1vdXNlZW50ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgYnRuQ29uZmlnLnNjYWxlLnNldCgxLjMsIDEuMywgMS4zKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGJ0bkNvbmZpZy5tZXNoLm9ubW91c2VsZWF2ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBidG5Db25maWcuc2NhbGUuc2V0KDEsIDEsIDEpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgYnRuQ29uZmlnLm1lc2gub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBzaG93Q29uZmlnKClcclxuICAgIH07XHJcbiAgICBcclxuICAgIGJ0bkNsb3NlVHV0ID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBtZW51Lm1lc2hlcy5idG5DbG9zZSwgXHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygyMjAsIC0yMjAsIDEwKSxcclxuICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBidG5DbG9zZVR1dC5tZXNoLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdHV0b3JpYWwuc2V0VmlzaWJsZShmYWxzZSlcclxuICAgICAgYnRuQ2xvc2VUdXQuc2V0VmlzaWJsZShmYWxzZSlcclxuICAgIH07XHJcbiAgICBcclxuICAgIGJ0bkNsb3NlQ29uZmlnID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBtZW51Lm1lc2hlcy5idG5DbG9zZSwgXHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygyMjAsIC0yMjAsIDEwKSxcclxuICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBidG5DbG9zZUNvbmZpZy5tZXNoLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY29uZmlnLnNldFZpc2libGUoZmFsc2UpXHJcbiAgICAgIGJ0bkNsb3NlQ29uZmlnLnNldFZpc2libGUoZmFsc2UpXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB3b3JsZC5hZGQoYnRuQ2xvc2VDb25maWcpXHJcbiAgICB3b3JsZC5hZGQoYnRuUGxheVNpbmdsZSlcclxuICAgIHdvcmxkLmFkZChidG5QbGF5TXVsdGkpXHJcbiAgICB3b3JsZC5hZGQoYnRuUXVlc3Rpb24pXHJcbiAgICB3b3JsZC5hZGQoYnRuQ29uZmlnKVxyXG4gICAgdHV0b3JpYWwucm9vdC5hcHBlbmRDaGlsZChidG5DbG9zZVR1dC5yb290KVxyXG4gICAgY29uZmlnLnJvb3QuYXBwZW5kQ2hpbGQoYnRuQ2xvc2VDb25maWcucm9vdClcclxuICB9O1xyXG4gIFxyXG4gIGZ1bmN0aW9uIGdldEJsdWVBY3Rpb25LZXkoKSB7XHJcbiAgICBpZiAoa2V5R2V0dGluZyA9PT0gJycpIHtcclxuICAgICAgc2hhcmVkLmJsdWVBY3Rpb25LZXkgPSAtMVxyXG4gICAgICBwMUFjdGlvbkJveC5pbm5lckhUTUwgPSAnUHJlc3MgYSBrZXknIFxyXG4gICAgICBrZXlHZXR0aW5nID0gJ2JsdWUnXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGdldFJlZEFjdGlvbktleSgpIHtcclxuICAgIGlmIChrZXlHZXR0aW5nID09PSAnJykge1xyXG4gICAgICBzaGFyZWQucmVkQWN0aW9uS2V5ID0gLTFcclxuICAgICAgcDJBY3Rpb25Cb3guaW5uZXJIVE1MID0gJ1ByZXNzIGEga2V5JyBcclxuICAgICAga2V5R2V0dGluZyA9ICdyZWQnXHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBsID0gY29uc29sZS5sb2cgXHJcbiAgbGV0IGFuZ2xlID0gMC4wO1xyXG4gIG1lbnUudXBkYXRlID0gZnVuY3Rpb24oZHQpIHtcclxuICAgIGlmIChrZXlHZXR0aW5nID09PSAnYmx1ZScpIHtcclxuICAgICAgaWYgKGlucHV0Lmxhc3RLZXlIaXQgIT09IC0xKSB7XHJcbiAgICAgICAgc2hhcmVkLmJsdWVBY3Rpb25LZXkgPSBpbnB1dC5sYXN0S2V5SGl0XHJcbiAgICAgICAgbGV0IHN0ciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoc2hhcmVkLmJsdWVBY3Rpb25LZXkpXHJcbiAgICAgICAgcDFBY3Rpb25Cb3guaW5uZXJIVE1MID0gc3RyID09PSAnICcgPyAnU1BBQ0UnIDogc3RyXHJcbiAgICAgICAga2V5R2V0dGluZyA9ICcnXHJcbiAgICAgIH1cclxuICAgIH0gIFxyXG4gICAgXHJcbiAgICBpZiAoa2V5R2V0dGluZyA9PT0gJ3JlZCcpIHtcclxuICAgICAgaWYgKGlucHV0Lmxhc3RLZXlIaXQgIT09IC0xKSB7XHJcbiAgICAgICAgc2hhcmVkLnJlZEFjdGlvbktleSA9IGlucHV0Lmxhc3RLZXlIaXRcclxuICAgICAgICBsZXQgc3RyID0gU3RyaW5nLmZyb21DaGFyQ29kZShzaGFyZWQucmVkQWN0aW9uS2V5KVxyXG4gICAgICAgIHAyQWN0aW9uQm94LmlubmVySFRNTCA9IHN0ciA9PT0gJyAnID8gJ1NQQUNFJyA6IHN0clxyXG4gICAgICAgIGtleUdldHRpbmcgPSAnJ1xyXG4gICAgICB9XHJcbiAgICB9ICBcclxuICAgIFxyXG4gICAgYW5nbGUgKz0gZHQ7XHJcbiAgICBcclxuICAgIGlmIChhbmdsZSA+PSAzNjApIGFuZ2xlIC09IDM2MDtcclxuICAgICAgICAgICAgXHJcbiAgICBsb2dvLnBvc2l0aW9uLnkgPSAtODAgKyBNYXRoLnNpbihhbmdsZSkgKiAtNDtcclxuICAgIFxyXG4gICAgYnRuUGxheVNpbmdsZS5wb3NpdGlvbi55ID0gMTgwICsgTWF0aC5zaW4oYW5nbGUpICogNDtcclxuICAgIGJ0blBsYXlTaW5nbGUucm90YXRpb24ueiA9IC04MCArIGJ0blBsYXlTaW5nbGUucG9zaXRpb24ueSAqIDAuNDtcclxuICAgIFxyXG4gICAgYnRuUGxheU11bHRpLnBvc2l0aW9uLnkgPSAxODAgKyBNYXRoLmNvcyhhbmdsZSkgKiA0O1xyXG4gICAgYnRuUGxheU11bHRpLnJvdGF0aW9uLnogPSA4MCArIGJ0blBsYXlNdWx0aS5wb3NpdGlvbi55ICogLTAuNDtcclxuICAgIFxyXG4gICAgYnRuUXVlc3Rpb24ucG9zaXRpb24ueSA9IDMyMCArIE1hdGguY29zKGFuZ2xlKSAqIC00O1xyXG4gICAgYnRuUXVlc3Rpb24ucm90YXRpb24ueiA9IDEyMCArIGJ0blF1ZXN0aW9uLnBvc2l0aW9uLnkgKiAtMC40O1xyXG4gICAgXHJcbiAgICBidG5Db25maWcucG9zaXRpb24ueSA9IDMyMCArIE1hdGguY29zKGFuZ2xlKSAqIC04O1xyXG4gICAgYnRuQ29uZmlnLnJvdGF0aW9uLnogPSAxMjAgKyBidG5Db25maWcucG9zaXRpb24ueSAqIC0wLjQ7XHJcbiAgICBcclxuICAgIGxvZ28udXBkYXRlKCk7XHJcbiAgICBidG5QbGF5U2luZ2xlLnVwZGF0ZSgpO1xyXG4gICAgYnRuUGxheU11bHRpLnVwZGF0ZSgpO1xyXG4gICAgYnRuUXVlc3Rpb24udXBkYXRlKCk7XHJcbiAgICBidG5Db25maWcudXBkYXRlKCk7XHJcbiAgICB0dXRvcmlhbC51cGRhdGUoKTtcclxuICAgIGJ0bkNsb3NlVHV0LnVwZGF0ZSgpO1xyXG4gICAgYnRuQ2xvc2VDb25maWcudXBkYXRlKCk7XHJcbiAgICBjb25maWcudXBkYXRlKCk7XHJcbiAgfTtcclxuICBcclxuICBmdW5jdGlvbiBzaG93VHV0b3JpYWwoKSB7XHJcbiAgICB0dXRvcmlhbC5zZXRWaXNpYmxlKHRydWUpXHJcbiAgICBjb25maWcuc2V0VmlzaWJsZShmYWxzZSlcclxuICAgIGJ0bkNsb3NlVHV0LnNldFZpc2libGUodHJ1ZSlcclxuICAgIGJ0bkNsb3NlQ29uZmlnLnNldFZpc2libGUoZmFsc2UpXHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIHNob3dDb25maWcoKSB7XHJcbiAgICBjb25maWcuc2V0VmlzaWJsZSh0cnVlKVxyXG4gICAgdHV0b3JpYWwuc2V0VmlzaWJsZShmYWxzZSlcclxuICAgIGJ0bkNsb3NlQ29uZmlnLnNldFZpc2libGUodHJ1ZSlcclxuICAgIGJ0bkNsb3NlVHV0LnNldFZpc2libGUoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBtZW51LmZpbmlzaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgd29ybGQuZGVzdHJveSgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBtZW51O1xyXG59KFxyXG4gIHdpbmRvdy51dG9weSwgXHJcbiAgd2luZG93LnV0b3B5LmlucHV0LCBcclxuICB3aW5kb3cudXRvcHkuZ3JhcGhpY3MsXHJcbiAgd2luZG93LnV0b3B5LmFzc2V0cyxcclxuICB3aW5kb3cudXRvcHkud29ybGQsXHJcbiAgd2luZG93LnV0b3B5Lm9iamVjdHMsXHJcbiAgd2luZG93LnV0b3B5LmNhbWVyYSxcclxuICB3aW5kb3cudXRvcHkubWF0aHMsXHJcbiAgd2luZG93LnV0b3B5LnNoYXJlZFxyXG4pKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24obWF0aHMsIGNhbWVyYSkge1xyXG4gICAgXHJcbiAgICBjb25zdCBvYmplY3RzID0ge1xyXG4gICAgICAgIERJU1BMQVlfTk9STUFMOiAwLFxyXG4gICAgICAgIERJU1BMQVlfQklMTEJPQVJEOiAxXHJcbiAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgb2JqZWN0cy5jcmVhdGVBc3NlbWJseSA9IGZ1bmN0aW9uKHBvc2l0aW9uLCByb3RhdGlvbiwgc2NhbGUpIHtcclxuICAgICAgICBsZXQgYXNzZW1ibHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBhc3NlbWJseS5jbGFzc0xpc3QuYWRkKCdhc3NlbWJseScpO1xyXG4gICAgICAgIGFzc2VtYmx5LnN0eWxlLndpbGxDaGFuZ2UgPSAndHJhbnNmb3JtJztcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcG9zID0gcG9zaXRpb24gfHwgbmV3IG1hdGhzLlZlY3RvcjMoKTtcclxuICAgICAgICBsZXQgcm90ID0gcm90YXRpb24gfHwgbmV3IG1hdGhzLlZlY3RvcjMoKTtcclxuICAgICAgICBsZXQgc2NsID0gc2NhbGUgfHwgbmV3IG1hdGhzLlZlY3RvcjMoKTtcclxuICAgICAgICBcclxuICAgICAgICBhc3NlbWJseS50cmFuc2Zvcm0gPSBuZXcgbWF0aHMuVHJhbnNmb3JtKFxyXG4gICAgICAgICAgICBwb3MueCwgcG9zLnksIHBvcy56LFxyXG4gICAgICAgICAgICByb3QueCwgcm90LnksIHJvdC56LFxyXG4gICAgICAgICAgICBzY2wueCwgc2NsLnksIHNjbC56XHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICBhc3NlbWJseS50cmFuc2Zvcm0uYmluZEVsZW1lbnQoYXNzZW1ibHkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBhc3NlbWJseTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIFxyXG4gICAgLyogR2FtZSBPYmplY3QgKi9cclxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICBvYmplY3RzLkdhbWVPYmplY3QgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgIHRoaXMuaWQgPSBkYXRhLmlkIHx8ICdnYW1lb2JqZWN0PCcgKyBEYXRlLm5vdygpICsgJz4nO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5hY3RpdmUgPSBkYXRhLmFjdGl2ZSAhPT0gdW5kZWZpbmVkPyBkYXRhLmFjdGl2ZSA6IHRydWU7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IGRhdGEudmlzaWJsZSAhPT0gdW5kZWZpbmVkPyBkYXRhLnZpc2libGUgOiB0cnVlO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5ib3VuZHMgPSBuZXcgbWF0aHMuVmVjdG9yMygwLCAwLCAwKTtcclxuICAgICAgdGhpcy5yb290ID0gb2JqZWN0cy5jcmVhdGVBc3NlbWJseShkYXRhLnBvc2l0aW9uLCBudWxsLCBudWxsKTtcclxuICAgICAgdGhpcy5tZXNoID0gb2JqZWN0cy5jcmVhdGVBc3NlbWJseShudWxsLCBkYXRhLnJvdGF0aW9uLCBkYXRhLnNjYWxlKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZCh0aGlzLm1lc2gpO1xyXG4gICAgICBcclxuICAgICAgLy90aGlzLmRpc3BsYXlTdHlsZSA9ICdub3JtYWwnIC8vIGNhbiBiZSBzZXQgdG8gbm9ybWFsIG9yIGJpbGxib2FyZCBzbyBmYXJcclxuICAgICAgdGhpcy5kaXNwbGF5U3R5bGUgPSBkYXRhLmRpc3BsYXlTdHlsZSB8fCBvYmplY3RzLkRJU1BMQVlfTk9STUFMOyAvLyBjYW4gYmUgc2V0IHRvIG5vcm1hbCBvciBiaWxsYm9hcmQgc28gZmFyXHJcbiAgICAgIHRoaXMubWVzaC5zdHlsZS5vcGFjaXR5ID0gZGF0YS5vcGFjaXR5ICE9PSB1bmRlZmluZWQ/IGRhdGEub3BhY2l0eSA6IDE7XHJcbiAgICAgIHRoaXMubWVzaC5zdHlsZS52aXNpYmlsaXR5ID0gdGhpcy52aXNpYmxlPyAndmlzaWJsZScgOiAnaGlkZGVuJztcclxuICAgICAgXHJcbiAgICAgIGlmIChkYXRhLmZhY2VzKSB7XHJcbiAgICAgICAgaWYgKGRhdGEuZmFjZXMgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgdGhpcy5tZXNoLmFwcGVuZEZhY2VzKGRhdGEuZmFjZXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm1lc2guYXBwZW5kQ2hpbGQoZGF0YS5mYWNlcy5jbG9uZU5vZGUoKSk7XHJcbiAgICAgICAgICBpZiAoZGF0YS5mYWNlcy5jaGlsZEVsZW1lbnRDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmZhY2VzLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICB0aGlzLm1lc2guYXBwZW5kQ2hpbGQoZGF0YS5mYWNlcy5jaGlsZE5vZGVzW2ldLmNsb25lTm9kZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgdGhpcy5yb290VHJhbnNmb3JtID0gdGhpcy5yb290LnRyYW5zZm9ybTtcclxuICAgICAgdGhpcy5tZXNoVHJhbnNmb3JtID0gdGhpcy5tZXNoLnRyYW5zZm9ybTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnJvb3RUcmFuc2Zvcm0ucG9zaXRpb247XHJcbiAgICAgIHRoaXMucm90YXRpb24gPSB0aGlzLm1lc2hUcmFuc2Zvcm0ucm90YXRpb247XHJcbiAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLm1lc2hUcmFuc2Zvcm0uc2NhbGU7XHJcbiAgICBcclxuICAgICAgdGhpcy5yb290VHJhbnNmb3JtLnVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLm1lc2hUcmFuc2Zvcm0udXBkYXRlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9iamVjdHMuR2FtZU9iamVjdC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmRpc3BsYXlTdHlsZSkge1xyXG4gICAgICAgICAgICBjYXNlIG9iamVjdHMuRElTUExBWV9CSUxMQk9BUkQ6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vdC50cmFuc2Zvcm0ucm90YXRpb24ueSA9IC1jYW1lcmEudHJhbnNmb3JtLnJvdGF0aW9uLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc2gudHJhbnNmb3JtLnJvdGF0aW9uLnggPSAtY2FtZXJhLnRyYW5zZm9ybS5yb3RhdGlvbi54O1xyXG4gICAgICAgICAgICB9IGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucm9vdFRyYW5zZm9ybS5sYXp5VXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5tZXNoVHJhbnNmb3JtLmxhenlVcGRhdGUoKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIG9iamVjdHMuR2FtZU9iamVjdC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMucm9vdC5yZW1vdmUoKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIG9iamVjdHMuR2FtZU9iamVjdC5wcm90b3R5cGUuc2V0VmlzaWJsZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5tZXNoLnN0eWxlLnZpc2liaWxpdHkgPSB2YWx1ZT8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9iamVjdHMuR2FtZU9iamVjdC5wcm90b3R5cGUuc2V0T3BhY2l0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5tZXNoLnN0eWxlLm9wYWNpdHkgPSB2YWx1ZTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIG9iamVjdHMuR2FtZU9iamVjdC5wcm90b3R5cGUuc2V0RmFjZUN1bGwgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubWVzaC5zdHlsZS5iYWNrZmFjZVZpc2liaWxpdHkgPSB2YWx1ZT8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBvYmplY3RzLkdhbWVPYmplY3QucHJvdG90eXBlLmdldEJvdW5kc0Zyb250ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueiAtICh0aGlzLmJvdW5kcy56IC8gMik7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBvYmplY3RzLkdhbWVPYmplY3QucHJvdG90eXBlLmdldEJvdW5kc0JhY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi56ICsgKHRoaXMuYm91bmRzLnogLyAyKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIG9iamVjdHMuR2FtZU9iamVjdC5wcm90b3R5cGUuZ2V0Qm91bmRzUmlnaHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi54ICsgKHRoaXMuYm91bmRzLnggLyAyKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIG9iamVjdHMuR2FtZU9iamVjdC5wcm90b3R5cGUuZ2V0Qm91bmRzTGVmdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnggLSAodGhpcy5ib3VuZHMueCAvIDIpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgb2JqZWN0cy5HYW1lT2JqZWN0LnByb3RvdHlwZS5nZXRCb3VuZHNUb3AgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi55IC0gKHRoaXMuYm91bmRzLnkgLyAyKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIG9iamVjdHMuR2FtZU9iamVjdC5wcm90b3R5cGUuZ2V0Qm91bmRzQm90dG9tID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueSArICh0aGlzLmJvdW5kcy55IC8gMik7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBvYmplY3RzLkdhbWVPYmplY3QucHJvdG90eXBlLmdldEJvdW5kc1dpZHRoID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm91bmRzLnggLyAyO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgb2JqZWN0cy5HYW1lT2JqZWN0LnByb3RvdHlwZS5nZXRCb3VuZHNIZWlnaHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib3VuZHMueiAvIDI7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBvYmplY3RzLkdhbWVPYmplY3QucHJvdG90eXBlLmdldEJvdW5kc0RlcHRoID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm91bmRzLnkgLyAyO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgIFxyXG4gICAgcmV0dXJuIG9iamVjdHM7XHJcbiAgICBcclxufShcclxuICAgIHdpbmRvdy51dG9weS5tYXRocyxcclxuICAgIHdpbmRvdy51dG9weS5jYW1lcmFcclxuKSk7XHJcbiAgICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLypcclxuICogQmV3YXJlIG9mIHNoaXR0eSBcIkkgZml4IGl0IGxhdGVyXCIgbG9hZGVkIGNvZGUuXHJcbiAqIFRoaXMgc2hvdWxkJ3ZlIG5ldmVyIGJlZW4gc2hpcHBlZCwgdG8gYmUgcXVpdGUgaG9uZXN0IE5PIENTUzNEIGJhc2VkIGdhbWVcclxuICogc2hvdWxkISFcclxuICogSXQncyBwcmV0dHkgKmhhY2t5KiBhbmQgbm90IG9wdGltaXplZCBkdWUgdG8gbGFjayBvZiBpbnRlcmVzdC5cclxuICogTm90IGdvbm5hIGJlIHNwZW5kaW5nIG1vcmUgdGltZSB3aXRoIDNEIENhc2NhZGluZyBTdHlsZSBTaCp0IGFmdGVyIHRoaXMgXHJcbiAqIGdhbWUgZm9yIGEgTE9ORyB0aW1lISEgSSdtIGVtYmFycmFzZWQgYnkgdGhpcyBjb2RlLiBBbGwgb2YgaXQuXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnXHJcblxyXG5sZXQgX2wgPSBjb25zb2xlLmxvZ1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24obWF0aHMsIGFzc2V0cywgc2hhcmVkLCB1dGlscywgaW5wdXQsIGdyYXBoaWNzLFxyXG4gIHdvcmxkLCBjYW1lcmEsIG9iamVjdHMsIGd1aSwgdGltZXIpXHJcbntcclxuICBjb25zdCBHQU1FX01PREVfU0lOR0xFID0gMCxcclxuICAgIEdBTUVfTU9ERV9NVUxUSSA9IDEsXHJcbiAgICBHQU1FX1RVUk5fQkxVRSA9IDEsXHJcbiAgICBHQU1FX1RVUk5fUkVEID0gMFxyXG5cclxuICBjb25zdCBnYW1lID0ge1xyXG4gICAgZGVidWdDYW1lcmE6IGZhbHNlLFxyXG5cclxuICAgIHBoeXNpY3M6IHtcclxuICAgICAgLy8gV29ybGRcclxuICAgICAgZ3Jhdml0eTogOS44LFxyXG4gICAgICB3aW5kOiBmYWxzZSxcclxuXHJcbiAgICAgIC8vIENoYXJhY3RlcnNcclxuICAgICAgaW5pdGlhbENoYXJhY3RlclNwZWVkOiAyNDAsXHJcblxyXG4gICAgICAvLyBBeGVcclxuICAgICAgYXhlTWFzczogMTg1LjAsXHJcbiAgICAgIGF4ZUJvdW5jaW5lc3M6IDAuNzUsXHJcbiAgICAgIGF4ZURhbXBpbmc6IDAuNzUsXHJcbiAgICAgIHRocm93Rm9yY2VBY2N1bVNwZWVkOiAzNSxcclxuICAgICAgdGhyb3dGb3JjZU1heDogMTQwMCxcclxuXHJcbiAgICAgIHRocm93SW5mbzoge1xyXG4gICAgICAgIG9yaWdpbjogbmV3IG1hdGhzLlZlY3RvcjMoKSxcclxuICAgICAgICBhbmdsZTogMCxcclxuICAgICAgICBhY2N1bXVsYXRlZEZvcmNlOiAwLFxyXG4gICAgICAgIGZvcmNlOiAwLFxyXG4gICAgICAgIGltcGFjdFBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdmlldzoge1xyXG4gICAgICBwZXJzcGVjdGl2ZTogNDYwLFxyXG4gICAgICB6b29tOiAwLjYwLFxyXG4gICAgICB0dXJuU3BlZWQ6IDEyMCxcclxuXHJcbiAgICAgIHBpdGNoOiAwLFxyXG4gICAgICB5YXc6IC0zNSxcclxuICAgICAgYmx1ZVlhdzogLTM2LFxyXG4gICAgICByZWRZYXc6IC0xMzYsXHJcblxyXG4gICAgICBmb2N1c0FuaW1TcGVlZDogOCxcclxuICAgICAgZW5hYmxlQWltRm9jdXM6IHRydWVcclxuICAgIH0sXHJcblxyXG4gICAgLy8gSSBkZWZpbml0ZWx5IG5lZWQgYSBzY2VuZSBlZGl0b3IgYW5kIGxvYWRlciwgdGhpcyBpcyBsYW1lIHN0dWZmLlxyXG4gICAgc2NlbmU6IHtcclxuICAgICAgY2hhcmFjdGVyU2l6ZTogODUsXHJcbiAgICAgIGF4ZVNpemU6IDcwLFxyXG5cclxuICAgICAgY29ycmlkb3JMZW5ndGg6IDI1MDAsXHJcbiAgICAgIGNvcnJpZG9yV2lkdGg6IDUxMixcclxuICAgICAgY29ycmlkb3JFbGV2YXRpb246IDEwMCxcclxuICAgICAgY29ycmlkb3JNaXN0TGVuZ3RoOiA4MDAsXHJcblxyXG4gICAgICBjaGFyYWN0ZXJTZXBhcmF0aW9uOiA0NjAsIC8vIDQ2MFxyXG4gICAgfSxcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gTk9URTogVGhlIGFycm93IGltYWdlIHBvaW50cyB1cCBhdCAwZGVnLCAtMTgwZGVnIGlzIGRvd24sXHJcbiAgICAvLyAtOTBkZWcgcmlnaHQgYW5kIDkwZGVnIGlzIGxlZnQhXHJcbiAgICAvL1xyXG4gICAgYXJyb3dBaW06IHtcclxuICAgICAgYW5pbVNwZWVkOiA3MCxcclxuICAgICAgbWF4QW5nbGU6IDQ1XHJcbiAgICB9LFxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBXaG9zZSB0dXJuIHRvIHRocm93IHRoZSBheGUgaXMgdGhpcz9cclxuICAgIC8vIE5vdGUgdGhhdCBJIHVzZSBhIGJsdWUvcmVkIG5vdGF0aW9uIHRvIHNlcGFyYXRlIHRoZVxyXG4gICAgLy8gdHdvIHByb3RhZ29uaXN0cywgSSBmZWVsIHRoYXQgcGxheWVyT25lIGFuZCBwbGF5ZXJUd28gXHJcbiAgICAvLyBpcyB0b28gY2xpY2hlLi4uXHJcbiAgICAvL1xyXG4gICAgdHVybjogR0FNRV9UVVJOX0JMVUUsIC8vIDEgaXMgYmx1ZSwgMCBpcyByZWRcclxuXHJcbiAgICBzY29yZUJsdWU6IDAsXHJcbiAgICBzY29yZVJlZDogMCxcclxuXHJcbiAgICBmaW5pc2hlZDogZmFsc2UsXHJcblxyXG4gICAgbW9kZTogc2hhcmVkLnNlbGVjdGVkR2FtZU1vZGUsXHJcbiAgICAvLyAxMDAgaXMgaGlnaCwgbWF5YmUgNTAgZm9yIHNvbGRpZXJzIGFuZCAwIGZvciBraW5ncz8gNDAgaXMgYWxzbyBnb29kIFxyXG4gICAgLy8gZm9yIHNvbGRpZXJzIVxyXG4gICAgQUlfRVJST1I6IDIzLCBcclxuICAgIHBhdXNlZDogZmFsc2VcclxuICAgIC8vb2xkSGlTY29yZTogMFxyXG4gICAgLy90aHJvd1RpbWVyOiAvL3RpbWVyLmNyZWF0ZSh7XHJcbiAgICAvL2R1cmF0aW9uOjMuMCwgY291bnREb3duOiB0cnVlLCBvbkNvbXBsZXRlZDp0cnlTd2l0Y2hUdXJuc30pXHJcbiAgfVxyXG5cclxuICAvLyBQaHlzaWNzIGFuZCBzY2VuZSBzaG9ydGN1dHMuXHJcbiAgbGV0IHRocm93SW5mbyA9IGdhbWUucGh5c2ljcy50aHJvd0luZm9cclxuICBsZXQgY2FtU2lkZSwgaXNBaW1pbmcsIGlzQWNjdW11bGF0aW5nRm9yY2VcclxuXHJcbiAgLy9cclxuICAvLyBNZXNoZXMgYW5kIHNoYXBlcy5cclxuICAvL1xyXG5cclxuICBnYW1lLm1lc2hlcyA9IHtcclxuICAgIC8vIENoYXJhY3RlcnNcclxuICAgIGd1YXJkMTogZ3JhcGhpY3MuY3JlYXRlRmFjZShcclxuICAgICAgZ2FtZS5zY2VuZS5jaGFyYWN0ZXJTaXplLCBnYW1lLnNjZW5lLmNoYXJhY3RlclNpemUsXHJcbiAgICAgIGFzc2V0cy50ZXh0dXJlc1tzaGFyZWQuc2VsZWN0ZWRDaGFyMV0sXHJcbiAgICAgIC8vIFRoaXMgb2Zmc2V0IGluIHRoZSBtZXNoJ3MgcG9zaXRpb24gaXMgdG8gbWFrZSB0aGF0IGR1bWJcclxuICAgICAgLy8gcnVubmluZyBhbmltYXRpb24gZnVubmllciBieSBtYWtpbmcgaXQgcm90YXRlIGFib3V0IHRoZVxyXG4gICAgICAvLyBjaGFyYWN0ZXIgYmVsbHkncyBwaXZvdC4gU28gbXVjaCBmdW4uXHJcbiAgICAgIDAsIC0oZ2FtZS5zY2VuZS5jaGFyYWN0ZXJTaXplLzgpLCAwXHJcbiAgICApLFxyXG5cclxuICAgIGdvYmxpbjE6IGdyYXBoaWNzLmNyZWF0ZUZhY2UoXHJcbiAgICAgIGdhbWUuc2NlbmUuY2hhcmFjdGVyU2l6ZSwgZ2FtZS5zY2VuZS5jaGFyYWN0ZXJTaXplLFxyXG4gICAgICAvL2Fzc2V0cy50ZXh0dXJlcy5nb2JsaW4xLFxyXG4gICAgICAvL3NoYXJlZC5zZWxlY3RlZENoYXIyLFxyXG4gICAgICBhc3NldHMudGV4dHVyZXNbc2hhcmVkLnNlbGVjdGVkQ2hhcjJdLFxyXG4gICAgICAwLCAtKGdhbWUuc2NlbmUuY2hhcmFjdGVyU2l6ZS84KSwgMFxyXG4gICAgKSxcclxuXHJcbiAgICAvLyBibHVlIHRhZ1xyXG4gICAgYmx1ZVRhZzogZ3JhcGhpY3MuY3JlYXRlRmFjZShcclxuICAgICAgMTYsIDE2LFxyXG4gICAgICBhc3NldHMudGV4dHVyZXMuYmx1ZVRhZ1xyXG4gICAgKSxcclxuXHJcbiAgICAvLyByZWQgdGFnXHJcbiAgICByZWRUYWc6IGdyYXBoaWNzLmNyZWF0ZUZhY2UoXHJcbiAgICAgIDE2LCAxNixcclxuICAgICAgYXNzZXRzLnRleHR1cmVzLnJlZFRhZ1xyXG4gICAgKSxcclxuXHJcbiAgICAvLyBXZWFwb25zXHJcbiAgICBheGU6IGdyYXBoaWNzLmNyZWF0ZUZhY2UoXHJcbiAgICAgIGdhbWUuc2NlbmUuYXhlU2l6ZSwgZ2FtZS5zY2VuZS5heGVTaXplLFxyXG4gICAgICBhc3NldHMudGV4dHVyZXMuYXhlXHJcbiAgICApLFxyXG5cclxuXHJcbiAgICAvLyBpbmRpY2F0b3JzXHJcbiAgICBhcnJvdzogZ3JhcGhpY3MuY3JlYXRlRmFjZShcclxuICAgICAgMTAwLCAxMDAsXHJcbiAgICAgIGFzc2V0cy50ZXh0dXJlcy5hcnJvd1xyXG4gICAgKSxcclxuXHJcbiAgICBpbXBhY3RNYXJrZXI6IGdyYXBoaWNzLmNyZWF0ZUZhY2UoXHJcbiAgICAgIDY0LCA2NCxcclxuICAgICAgYXNzZXRzLnRleHR1cmVzLmltcGFjdE1hcmtlclxyXG4gICAgKSxcclxuXHJcblxyXG5cclxuICAgIC8vIENvcnJpZG9yXHJcbiAgICBjb3JyaWRvcjogZ3JhcGhpY3MuY3JlYXRlRmFjZShcclxuICAgICAgNTEyLCBnYW1lLnNjZW5lLmNvcnJpZG9yTGVuZ3RoLFxyXG4gICAgICBhc3NldHMudGV4dHVyZXMuY29ycmlkb3IuZmxvb3JcclxuICAgICksXHJcblxyXG4gICAgcm9vZjogZ3JhcGhpY3MuY3JlYXRlRmFjZShcclxuICAgICAgNTEyLCBnYW1lLnNjZW5lLmNvcnJpZG9yTGVuZ3RoLFxyXG4gICAgICBhc3NldHMudGV4dHVyZXMuY29ycmlkb3Iucm9vZixcclxuICAgICAgMCwgMCwgNTEyLFxyXG4gICAgICAwLCAtMTgwLCAwXHJcbiAgICApLFxyXG5cclxuICAgIHdhbGxSaWdodDogZ3JhcGhpY3MuY3JlYXRlRmFjZShcclxuICAgICAgZ2FtZS5zY2VuZS5jb3JyaWRvckxlbmd0aCwgNTEyLFxyXG4gICAgICBhc3NldHMudGV4dHVyZXMuY29ycmlkb3Iud2FsbCxcclxuICAgICAgMjU2LCAwLCAyNTYsXHJcbiAgICAgIC05MCwgLTkwLCAwXHJcbiAgICApLFxyXG5cclxuICAgIHdhbGxMZWZ0OiBncmFwaGljcy5jcmVhdGVGYWNlKFxyXG4gICAgICBnYW1lLnNjZW5lLmNvcnJpZG9yTGVuZ3RoLCA1MTIsXHJcbiAgICAgIGFzc2V0cy50ZXh0dXJlcy5jb3JyaWRvci53YWxsLFxyXG4gICAgICAtMjU1LCAwLCAyNTYsXHJcbiAgICAgIC05MCwgOTAsIDBcclxuICAgICksXHJcblxyXG4gICAgc3RhdHVlOiBncmFwaGljcy5jcmVhdGVGYWNlKFxyXG4gICAgICAxMjgsIDEyOCxcclxuICAgICAgYXNzZXRzLnRleHR1cmVzLmNvcnJpZG9yLnN0YXR1ZSxcclxuICAgICAgMCwgMCwgMCxcclxuICAgICAgMCwgMCwgMFxyXG4gICAgKSxcclxuXHJcblxyXG4gICAgLy8gSSBkb24ndCBrbm93IGhvdyB0byBtYWtlIG1pc3Qgd2l0aCBkaXZzLFxyXG4gICAgLy8gc28gSSBqdXN0IGZha2UgaXQgYnkgY3JlYXRpbmcgYSBob2xsb3cgY3ViZSwgd2l0aCBhIGdyYWRpZW50IHRleHR1cmUgXHJcbiAgICAvLyBvbiBlYWNoIGZhY2UgcG9pbnRpbmcgdG8gdGhlIHNhbWUgZGlyZWN0aW9uLlxyXG4gICAgLy8gQWxzbywgaXQgaXMgcHJldHR5IHdvbmt5ISBUaGUgYWN0dWFsIHRleHR1cmUgaGVyZSBzaG91bGQgYmVcclxuICAgIC8vIGV4cGFuZGVkIHRvIDUxMng1MTIsIGJ1dCBmb3Igei1maWdodGluZyByZWFzb25zLCBJIGhhdmUgdG8gb2Zmc2V0IFxyXG4gICAgLy8gdGhlIHNpemUgYSBiaXQgc28gdGhhdCB3ZSBjYW4gc2VlIGl0LlxyXG4gICAgLy8gTm90ZSB0byBteXNlbGY6IENTUzNEIGlzIGEgYmlnIGZhdCBoYWNrLlxyXG4gICAgYmFja01pc3Q6IGdyYXBoaWNzLmNyZWF0ZUZhZGluZ1R1bm5lbChcclxuICAgICAgNTA3LCBnYW1lLnNjZW5lLmNvcnJpZG9yTWlzdExlbmd0aCwgNTEyLFxyXG4gICAgICAwLCBcclxuICAgICAgLShnYW1lLnNjZW5lLmNvcnJpZG9yTGVuZ3RoLzIpKyhnYW1lLnNjZW5lLmNvcnJpZG9yTWlzdExlbmd0aC8yKS0xOCwgXHJcbiAgICAgIDI1NiwgXHJcbiAgICAgIGFzc2V0cy50ZXh0dXJlcy5mYWRlRG93blxyXG4gICAgKSxcclxuXHJcbiAgICBmcm9udE1pc3Q6IGdyYXBoaWNzLmNyZWF0ZUZhZGluZ1R1bm5lbChcclxuICAgICAgNTA2LCBnYW1lLnNjZW5lLmNvcnJpZG9yTWlzdExlbmd0aCwgNTEyLFxyXG4gICAgICAwLCBcclxuICAgICAgLShnYW1lLnNjZW5lLmNvcnJpZG9yTGVuZ3RoLzIpKyhnYW1lLnNjZW5lLmNvcnJpZG9yTWlzdExlbmd0aC8yKS0xOCxcclxuICAgICAgMjU2LFxyXG4gICAgICBhc3NldHMudGV4dHVyZXMuZmFkZVVwXHJcbiAgICApLFxyXG5cclxuXHJcblxyXG4gICAgLy8gRWZmZWN0c1xyXG4gICAgc2hhZG93QmxvYjogZ3JhcGhpY3MuY3JlYXRlRmFjZShcclxuICAgICAgNjQsIDY0LFxyXG4gICAgICBhc3NldHMudGV4dHVyZXMuc2hhZG93QmxvYlxyXG4gICAgKSxcclxuXHJcbiAgICBoaXQ6IGdyYXBoaWNzLmNyZWF0ZUZhY2UoXHJcbiAgICAgIDE4MCwgMTgwLFxyXG4gICAgICBhc3NldHMudGV4dHVyZXMuaGl0MVxyXG4gICAgKSxcclxuXHJcbiAgICBsaWdodFJheTogZ3JhcGhpY3MuY3JlYXRlRmFjZShcclxuICAgICAgNjQsIDQwMCxcclxuICAgICAgYXNzZXRzLnRleHR1cmVzLmxpZ2h0UmF5LFxyXG4gICAgICAwLCAwLCAwLFxyXG4gICAgICAwLCAwLCAwLFxyXG4gICAgICA0MCwgMFxyXG4gICAgKSxcclxuXHJcbiAgICBsaWdodFF1YWQ6IGdyYXBoaWNzLmNyZWF0ZUZhY2UoXHJcbiAgICAgIDY0LCA2NCxcclxuICAgICAgJzpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpJyxcclxuICAgICAgMCwgMCwgMCxcclxuICAgICAgOTAsIDAsIDBcclxuICAgIClcclxuXHJcbiAgfVxyXG5cclxuICBnYW1lLnNvdW5kcyA9IHtcclxuICAgIGF4ZVRocm93OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc25kLWF4ZS10aHJvdycpLFxyXG5cclxuICAgIGF4ZUhpdEZsb29yMTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NuZC1heGUtaGl0LWZsb29yMScpLFxyXG4gICAgYXhlSGl0Rmxvb3IyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc25kLWF4ZS1oaXQtZmxvb3IyJyksXHJcbiAgICBheGVIaXRGbG9vcjM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbmQtYXhlLWhpdC1mbG9vcjMnKSxcclxuICAgIGF4ZUhpdEZsb29yNDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NuZC1heGUtaGl0LWZsb29yNCcpLFxyXG5cclxuICAgIGF4ZU9uRmxlc2g6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbmQtYXhlLW9uLWZsZXNoJylcclxuICB9XHJcblxyXG4gIGdhbWUuc291bmRzLmhpdEZsb29yID0gW1xyXG4gICAgJ2F4ZUhpdEZsb29yMScsXHJcbiAgICAnYXhlSGl0Rmxvb3IyJyxcclxuICAgICdheGVIaXRGbG9vcjMnLFxyXG4gICAgJ2F4ZUhpdEZsb29yNCdcclxuICBdXHJcblxyXG4gIC8vIFBlcnNpc3RcclxuICA7KGZ1bmN0aW9uIHNldHVwTWVzaGVzKCkge1xyXG4gICAgbGV0IGNvcnJpZG9yID0gZ2FtZS5tZXNoZXMuY29ycmlkb3JcclxuXHJcbiAgICBjb3JyaWRvci5hcHBlbmRDaGlsZChnYW1lLm1lc2hlcy53YWxsUmlnaHQpXHJcbiAgICBjb3JyaWRvci5hcHBlbmRDaGlsZChnYW1lLm1lc2hlcy53YWxsTGVmdClcclxuICAgIGNvcnJpZG9yLmFwcGVuZENoaWxkKGdhbWUubWVzaGVzLnJvb2YpXHJcblxyXG4gICAgY29ycmlkb3IuYXBwZW5kRmFjZXMoZ2FtZS5tZXNoZXMuYmFja01pc3QpXHJcbiAgICBjb3JyaWRvci5hcHBlbmRGYWNlcyhnYW1lLm1lc2hlcy5mcm9udE1pc3QpXHJcbiAgfSgpKVxyXG5cclxuICBsZXQgbGFiZWxTY29yZSwgbGFiZWxIaVNjb3JlLCBsYWJlbFN0YXJ0LCBsYWJlbFRocm93VGltZTtcclxuICBmdW5jdGlvbiBjcmVhdGVIVUQoKSB7XHJcbiAgICBhc3NldHMubG9hZENvcnJpZG9yVGV4dHVyZXMoc2hhcmVkLnNlbGVjdGVkQ29ycmlkb3IpXHJcbiAgICBsZXQgYnRuQmFjayA9IGd1aS5jcmVhdGVCdXR0b24oXHJcbiAgICAgICdhc3NldHMvaW1hZ2VzL2J0bkJhY2sucG5nJyxcclxuICAgICAge1xyXG4gICAgICAgIG9ubW91c2VvdmVyOiAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5zcmNFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFxyXG4gICAgICAgICAgICAndHJhbnNsYXRlWCgxNnB4KSB0cmFuc2xhdGVZKDE2cHgpIHNjYWxlWCgyLjUpIHNjYWxlWSgyLjUpJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9ubW91c2VsZWF2ZTogKGUpID0+IHtcclxuICAgICAgICAgIGUuc3JjRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcclxuICAgICAgICAgICAgJ3RyYW5zbGF0ZVgoMTZweCkgdHJhbnNsYXRlWSgxNnB4KSBzY2FsZVgoMikgc2NhbGVZKDIpJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9ubW91c2Vkb3duOiAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5zcmNFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFxyXG4gICAgICAgICAgICAndHJhbnNsYXRlWCgxNnB4KSB0cmFuc2xhdGVZKDE2cHgpIHNjYWxlWCgxLjUpIHNjYWxlWSgxLjUpJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9ubW91c2V1cDogKGUpID0+IHtcclxuICAgICAgICAgIGUuc3JjRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcclxuICAgICAgICAgICAgJ3RyYW5zbGF0ZVgoMTZweCkgdHJhbnNsYXRlWSgxNnB4KSBzY2FsZVgoMi41KSBzY2FsZVkoMi41KSdcclxuICAgICAgICAgIC8vaWYgKCFnYW1lLmZpbmlzaGVkKVxyXG4gICAgICAgICAgICB1dG9weS5zd2l0Y2hTdGF0ZSgnbWVudXN0YXRlJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICBidG5CYWNrLnN0eWxlLnRyYW5zZm9ybSA9IFxyXG4gICAgICAndHJhbnNsYXRlWCgxNnB4KSB0cmFuc2xhdGVZKDE2cHgpIHNjYWxlWCgyKSBzY2FsZVkoMiknXHJcblxyXG4gICAgLy9pZiAoZ2FtZS5tb2RlID09PSBHQU1FX01PREVfTVVMVEkpIHtcclxuICAgICAgbGV0IGJsdWVUYWdNYXJrID0gZ3VpLmNyZWF0ZUltYWdlKCdhc3NldHMvaW1hZ2VzL2JsdWUtdGFnLnBuZycpXHJcbiAgICAgIGJsdWVUYWdNYXJrLnN0eWxlLnRyYW5zZm9ybSA9IFxyXG4gICAgICAgICd0cmFuc2xhdGVYKDE3MHB4KSB0cmFuc2xhdGVZKDQwcHgpIHNjYWxlWCgyKSBzY2FsZVkoMiknXHJcblxyXG4gICAgICBsZXQgcmVkVGFnTWFyayA9IGd1aS5jcmVhdGVJbWFnZSgnYXNzZXRzL2ltYWdlcy9yZWQtdGFnLnBuZycpXHJcbiAgICAgIHJlZFRhZ01hcmsuc3R5bGUudHJhbnNmb3JtID0gXHJcbiAgICAgICAgJ3RyYW5zbGF0ZVgoMjI2cHgpIHRyYW5zbGF0ZVkoNDBweCkgc2NhbGVYKDIpIHNjYWxlWSgyKSdcclxuICAgIC8vfVxyXG5cclxuICAgIC8vbGFiZWxTY29yZSA9IGd1aS5jcmVhdGVMYWJlbChcclxuICAgICAgLy9nYW1lLm1vZGUgPT09IEdBTUVfTU9ERV9NVUxUSSA/IFxyXG4gICAgICAvL2dhbWUuc2NvcmVCbHVlICsgJ3gnICsgZ2FtZS5zY29yZVJlZCA6IGdhbWUuc2NvcmVCbHVlXHJcbiAgICAvLylcclxuICAgIFxyXG4gICAgbGFiZWxTY29yZSA9IGd1aS5jcmVhdGVMYWJlbChnYW1lLnNjb3JlQmx1ZSArICd4JyArIGdhbWUuc2NvcmVSZWQpO1xyXG5cclxuICAgIGxhYmVsU2NvcmUuc3R5bGUudHJhbnNmb3JtPSAndHJhbnNsYXRlWCgyMDBweCknXHJcbiAgICBsYWJlbFNjb3JlLnN0eWxlLnRvcCA9ICcwJSdcclxuICAgIGxhYmVsU2NvcmUuY2xhc3NMaXN0LmFkZCgndGV4dC1zY29yZScpXHJcblxyXG4gICAgaWYgKGdhbWUubW9kZSA9PT0gR0FNRV9NT0RFX01VTFRJKSB7XHJcbiAgICAgIC8vbGFiZWxUaHJvd1RpbWUgPSBndWkuY3JlYXRlTGFiZWwoZ2FtZS50aHJvd1RpbWVyLnRpbWUudG9GaXhlZCgwKSlcclxuICAgICAgLy9sYWJlbFRocm93VGltZS5zdHlsZS50cmFuc2Zvcm09ICd0cmFuc2xhdGVYKDM3MHB4KSB0cmFuc2xhdGVZKDU2MHB4KSdcclxuICAgICAgLy9sYWJlbFRocm93VGltZS5zdHlsZS50b3AgPSAnMCUnXHJcbiAgICAgIC8vbGFiZWxUaHJvd1RpbWUuY2xhc3NMaXN0LmFkZCgndGV4dC1zY29yZScpXHJcbiAgICAgIC8vbGFiZWxUaHJvd1RpbWUuc3R5bGUuZm9udFNpemUgPSAnMzBweCdcclxuICAgIH1cclxuXHJcbiAgICAvL2lmIChnYW1lLm1vZGUgPT09IEdBTUVfTU9ERV9TSU5HTEUpXHJcbiAgICBjcmVhdGVTY29yZVVJKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgbGV0IGxhYmVsTmV3SGlTY29yZTtcclxuICBmdW5jdGlvbiBjcmVhdGVTY29yZVVJKGxvc2UpIHtcclxuICAgIC8vbGFiZWxTdGFydCA9IGd1aS5jcmVhdGVMYWJlbChcclxuICAgICAgLy9sb3NlPydZb3VcXCdyZSBkZWFkISA8YnIvPjxiciAvPlByZXNzIEFDVElPTiBvciBUQVAgdG8gc3RhcnQgYWdhaW4hJ1xyXG4gICAgICAvLzonUHJlc3MgQUNUSU9OIG9yIFRBUCB0byBzdGFydC4nKVxyXG4gICAgLy9sYWJlbFN0YXJ0LnN0eWxlLnRyYW5zZm9ybT0gJ3RyYW5zbGF0ZVgoMjAwcHgpIHRyYW5zbGF0ZVkoMTkwcHgpJ1xyXG4gICAgLy9sYWJlbFN0YXJ0LnN0eWxlLnRvcCA9ICcwJSdcclxuICAgIC8vbGFiZWxTdGFydC5jbGFzc0xpc3QuYWRkKCd0ZXh0LXNjb3JlJylcclxuICAgIC8vbGFiZWxTdGFydC5zdHlsZS53aWR0aCA9ICcyNjBweCdcclxuICAgIC8vbGFiZWxTdGFydC5zdHlsZS5mb250U2l6ZSA9ICc0MHB4J1xyXG5cclxuICAgIC8vbGFiZWxIaVNjb3JlID0gZ3VpLmNyZWF0ZUxhYmVsKHNoYXJlZC5oaVNjb3JlKVxyXG4gICAgLy9sYWJlbEhpU2NvcmUuc3R5bGUudHJhbnNmb3JtPSAndHJhbnNsYXRlWCgyMDBweCkgdHJhbnNsYXRlWSg4MHB4KSdcclxuICAgIC8vbGFiZWxIaVNjb3JlLmNsYXNzTGlzdC5hZGQoJ3RleHQtaGktc2NvcmUnKVxyXG4gICAgLy9sYWJlbEhpU2NvcmUuc3R5bGUud2lkdGggPSAnMjYwcHgnXHJcblxyXG4gICAgLy9pZiAobG9zZSkge1xyXG4gICAgICAvL2xhYmVsTmV3SGlTY29yZSA9IGd1aS5jcmVhdGVMYWJlbChcclxuICAgICAgICAvL2dhbWUuc2NvcmVCbHVlPmdhbWUub2xkSGlTY29yZT9cclxuICAgICAgICAvLydOZXcgaGlnaCBzY29yZSEnOicnXHJcbiAgICAgIC8vKVxyXG4gICAgICAvL2xhYmVsTmV3SGlTY29yZS5zdHlsZS50cmFuc2Zvcm0gPSBcclxuICAgICAgICAvLyd0cmFuc2xhdGVYKDIwMHB4KSB0cmFuc2xhdGVZKDEyMHB4KSdcclxuICAgICAgLy9sYWJlbE5ld0hpU2NvcmUuY2xhc3NMaXN0LmFkZCgndGV4dC1oaS1zY29yZScpXHJcbiAgICAgIC8vbGFiZWxOZXdIaVNjb3JlLnN0eWxlLndpZHRoID0gJzI2MHB4J1xyXG4gICAgICAvL2xhYmVsTmV3SGlTY29yZS5zdHlsZS5mb250U2l6ZSA9ICcyNXB4J1xyXG4gICAgICAvL2lmIChnYW1lLm9sZEhpU2NvcmUgIT09IHNoYXJlZC5oaVNjb3JlKSBcclxuICAgICAgICAvL2dhbWUub2xkSGlTY29yZSA9IHNoYXJlZC5oaVNjb3JlXHJcbiAgICAvL31cclxuXHJcbiAgfVxyXG5cclxuICAvLyBFYWNoIGNvcnJpZG9yIHdpbGwgaGF2ZSBkaWZmZXJlbnQgcGh5c2ljcyBwcm9maWxlcyxcclxuICAvLyB0aGlzIHdheSB0aGUgZ2FtZSB3aWxsIGZlZWwgbGVzcyByZXBldGl0aXZlLlxyXG4gIGZ1bmN0aW9uIHNldHVwQ29ycmlkb3JQaHlzaWNzKGNvcnJpZG9yKSB7XHJcbiAgICBzd2l0Y2goY29ycmlkb3IpIHtcclxuICAgICAgY2FzZSAnY29ycmlkb3JIdW1hbnMnOiB7XHJcbiAgICAgICAgZ2FtZS5waHlzaWNzLmdyYXZpdHkgPSA5LjhcclxuICAgICAgICBnYW1lLnBoeXNpY3MuYXhlQm91bmNpbmVzcyA9IDAuNzVcclxuICAgICAgICBnYW1lLnBoeXNpY3Mud2luZCA9IGZhbHNlXHJcbiAgICAgIH0gYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdjb3JyaWRvckdvYmxpbnMnOiB7XHJcbiAgICAgICAgZ2FtZS5waHlzaWNzLmdyYXZpdHkgPSA1LjNcclxuICAgICAgICBnYW1lLnBoeXNpY3MuYXhlQm91bmNpbmVzcyA9IDAuNzVcclxuICAgICAgICBnYW1lLnBoeXNpY3Mud2luZCA9IGZhbHNlXHJcbiAgICAgIH0gYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdjb3JyaWRvckJhcmJhcmlhbnMnOiB7XHJcbiAgICAgICAgZ2FtZS5waHlzaWNzLmdyYXZpdHkgPSAxMi4wXHJcbiAgICAgICAgZ2FtZS5waHlzaWNzLmF4ZUJvdW5jaW5lc3MgPSAwLjlcclxuICAgICAgICBnYW1lLnBoeXNpY3Mud2luZCA9IGZhbHNlXHJcbiAgICAgIH0gYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdjb3JyaWRvckdvdmVybm1lbnQnOiB7XHJcbiAgICAgICAgZ2FtZS5waHlzaWNzLmdyYXZpdHkgPSA5LjhcclxuICAgICAgICBnYW1lLnBoeXNpY3MuYXhlQm91bmNpbmVzcyA9IDAuNzVcclxuICAgICAgICBnYW1lLnBoeXNpY3Mud2luZCA9IHRydWVcclxuICAgICAgfSBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1dDogYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy9cclxuICAvLyBHYW1lIGVudGl0aWVzL29iamVjdHMuXHJcbiAgLy9cclxuXHJcbiAgbGV0IGNvcnJpZG9yLFxyXG4gICAgYmx1ZSxcclxuICAgIGJsdWVTaGFkb3dCbG9iLFxyXG4gICAgYmx1ZVRhZyxcclxuICAgIHJlZCxcclxuICAgIHJlZFNoYWRvd0Jsb2IsXHJcbiAgICByZWRUYWcsXHJcbiAgICBhcnJvdyxcclxuICAgIGF4ZSxcclxuICAgIHNoYWRvd0Jsb2IsXHJcbiAgICBoaXQsXHJcbiAgICBjaGFySGl0LFxyXG4gICAgaW1wYWN0TWFya2VyLFxyXG4gICAgc3RhdHVlcyA9IFtdLFxyXG4gICAgbGlnaHRSYXlzID0gW10sXHJcbiAgICBzY3JlZW5GbGFzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JlZW4tZmxhc2gnKVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RzKCkge1xyXG4gICAgY3JlYXRlSFVEKClcclxuXHJcbiAgICBzZXR1cENvcnJpZG9yUGh5c2ljcyhzaGFyZWQuc2VsZWN0ZWRDb3JyaWRvcilcclxuXHJcbiAgICBncmFwaGljcy5zZXRGYWNlVGV4dHVyZShcclxuICAgICAgZ2FtZS5tZXNoZXMuY29ycmlkb3IsIGFzc2V0cy50ZXh0dXJlcy5jb3JyaWRvci5mbG9vclxyXG4gICAgKVxyXG4gICAgZ3JhcGhpY3Muc2V0RmFjZVRleHR1cmUoXHJcbiAgICAgIGdhbWUubWVzaGVzLnJvb2YsIGFzc2V0cy50ZXh0dXJlcy5jb3JyaWRvci5yb29mXHJcbiAgICApXHJcbiAgICBncmFwaGljcy5zZXRGYWNlVGV4dHVyZShcclxuICAgICAgZ2FtZS5tZXNoZXMud2FsbExlZnQsIGFzc2V0cy50ZXh0dXJlcy5jb3JyaWRvci53YWxsXHJcbiAgICApXHJcbiAgICBncmFwaGljcy5zZXRGYWNlVGV4dHVyZShcclxuICAgICAgZ2FtZS5tZXNoZXMud2FsbFJpZ2h0LCBhc3NldHMudGV4dHVyZXMuY29ycmlkb3Iud2FsbFxyXG4gICAgKVxyXG4gICAgZ3JhcGhpY3Muc2V0RmFjZVRleHR1cmUoXHJcbiAgICAgIGdhbWUubWVzaGVzLnN0YXR1ZSwgYXNzZXRzLnRleHR1cmVzLmNvcnJpZG9yLnN0YXR1ZVxyXG4gICAgKVxyXG5cclxuICAgIGdyYXBoaWNzLnNldEZhY2VUZXh0dXJlKFxyXG4gICAgICBnYW1lLm1lc2hlcy5ndWFyZDEsIGFzc2V0cy50ZXh0dXJlc1tzaGFyZWQuc2VsZWN0ZWRDaGFyMV1cclxuICAgIClcclxuICAgIGdyYXBoaWNzLnNldEZhY2VUZXh0dXJlKFxyXG4gICAgICBnYW1lLm1lc2hlcy5nb2JsaW4xLCBhc3NldHMudGV4dHVyZXNbc2hhcmVkLnNlbGVjdGVkQ2hhcjJdXHJcbiAgICApXHJcblxyXG4gICAgYmx1ZSA9IG5ldyBvYmplY3RzLkdhbWVPYmplY3Qoe1xyXG4gICAgICBmYWNlczogZ2FtZS5tZXNoZXMuZ3VhcmQxLFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoKSxcclxuICAgICAgZGlzcGxheVN0eWxlOiBvYmplY3RzLkRJU1BMQVlfQklMTEJPQVJELFxyXG4gICAgICBpZDogJ2JsdWUnXHJcbiAgICB9KVxyXG5cclxuICAgIGJsdWVTaGFkb3dCbG9iID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBnYW1lLm1lc2hlcy5zaGFkb3dCbG9iLFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoKSxcclxuICAgICAgcm90YXRpb246IG5ldyBtYXRocy5WZWN0b3IzKDkwLCAwLCAwKSxcclxuICAgICAgaWQ6ICdibHVlU2hhZG93QmxvYidcclxuICAgIH0pXHJcblxyXG4gICAgYmx1ZVRhZyA9IG5ldyBvYmplY3RzLkdhbWVPYmplY3Qoe1xyXG4gICAgICBmYWNlczogZ2FtZS5tZXNoZXMuYmx1ZVRhZyxcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKCksXHJcbiAgICAgIHNjYWxlOiBuZXcgbWF0aHMuVmVjdG9yMygxLjIsIDEuMiwgMS4yKSxcclxuICAgICAgYWN0aXZlOiBmYWxzZSxcclxuICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgZGlzcGxheVN0eWxlOiBvYmplY3RzLkRJU1BMQVlfQklMTEJPQVJELFxyXG4gICAgICBpZDogJ2JsdWVUYWcnXHJcbiAgICB9KVxyXG5cclxuICAgIHJlZCA9IG5ldyBvYmplY3RzLkdhbWVPYmplY3Qoe1xyXG4gICAgICBmYWNlczogZ2FtZS5tZXNoZXMuZ29ibGluMSxcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKCksXHJcbiAgICAgIGRpc3BsYXlTdHlsZTogb2JqZWN0cy5ESVNQTEFZX0JJTExCT0FSRCxcclxuICAgICAgaWQ6ICdyZWQnXHJcbiAgICB9KVxyXG5cclxuICAgIHJlZFNoYWRvd0Jsb2IgPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IGdhbWUubWVzaGVzLnNoYWRvd0Jsb2IsXHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygpLFxyXG4gICAgICByb3RhdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoOTAsIDAsIDApLFxyXG4gICAgICBpZDogJ3JlZFNoYWRvd0Jsb2InXHJcbiAgICB9KVxyXG5cclxuICAgIHJlZFRhZyA9IG5ldyBvYmplY3RzLkdhbWVPYmplY3Qoe1xyXG4gICAgICBmYWNlczogZ2FtZS5tZXNoZXMucmVkVGFnLFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoKSxcclxuICAgICAgc2NhbGU6IG5ldyBtYXRocy5WZWN0b3IzKDEuMiwgMS4yLCAxLjIpLFxyXG4gICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICBkaXNwbGF5U3R5bGU6IG9iamVjdHMuRElTUExBWV9CSUxMQk9BUkQsXHJcbiAgICAgIGlkOiAncmVkVGFnJ1xyXG4gICAgfSlcclxuXHJcbiAgICBheGUgPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IGdhbWUubWVzaGVzLmF4ZSxcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKCksXHJcbiAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICBkaXNwbGF5U3R5bGU6IG9iamVjdHMuRElTUExBWV9CSUxMQk9BUkQsXHJcbiAgICAgIGlkOiAnYXhlJ1xyXG4gICAgfSlcclxuXHJcbiAgICBzaGFkb3dCbG9iID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBnYW1lLm1lc2hlcy5zaGFkb3dCbG9iLFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoKSxcclxuICAgICAgcm90YXRpb246IG5ldyBtYXRocy5WZWN0b3IzKDkwLCAwLCAwKSxcclxuICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIGlkOiAnc2hhZG93QmxvYidcclxuICAgIH0pXHJcblxyXG4gICAgYXJyb3cgPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IGdhbWUubWVzaGVzLmFycm93LFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoMCwgNDAwLCAwKSxcclxuICAgICAgcm90YXRpb246IG5ldyBtYXRocy5WZWN0b3IzKDkwLCAwLCAwKSxcclxuICAgICAgaWQ6ICdhcnJvdydcclxuICAgIH0pXHJcblxyXG4gICAgaW1wYWN0TWFya2VyID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBnYW1lLm1lc2hlcy5pbXBhY3RNYXJrZXIsXHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygpLFxyXG4gICAgICByb3RhdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoOTAsIDAsIDApLFxyXG4gICAgICBpZDogJ2ltcGFjdE1hcmtlcidcclxuICAgIH0pXHJcblxyXG4gICAgY29ycmlkb3IgPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IGdhbWUubWVzaGVzLmNvcnJpZG9yLFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoMCwgLWdhbWUuc2NlbmUuY29ycmlkb3JFbGV2YXRpb24sIDApLFxyXG4gICAgICByb3RhdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoOTAsIDAsIDApLFxyXG4gICAgICBpZDogJ2NvcnJpZG9yJ1xyXG4gICAgfSlcclxuXHJcbiAgICBoaXQgPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IGdhbWUubWVzaGVzLmhpdCxcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKCksXHJcbiAgICAgIHJvdGF0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMyg5MCwgMCwgMCksXHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIGlkOiAnaGl0J1xyXG4gICAgfSlcclxuXHJcbiAgICBjaGFySGl0ID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBnYW1lLm1lc2hlcy5oaXQsXHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygpLFxyXG4gICAgICByb3RhdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoKSxcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgZGlzcGxheVN0eWxlOiBvYmplY3RzLkRJU1BMQVlfQklMTEJPQVJELFxyXG4gICAgICBpZDogJ2NoYXJIaXQnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0UmFuZG9tQ2hhclgoKSB7XHJcbiAgICBsZXQgckxlbiA9IChnYW1lLnNjZW5lLmNvcnJpZG9yV2lkdGgqMC41KSAtIFxyXG4gICAgICAoZ2FtZS5zY2VuZS5jaGFyYWN0ZXJTaXplKjAuNSAqIDEuNSlcclxuICAgIHJldHVybiAtckxlbiArIChNYXRoLnJhbmRvbSgpICogckxlbiAqIDIpXHJcbiAgfVxyXG5cclxuICAvLyBTaG91bGQndmUgYmVlbiBjYWxsZWQ6IFwic2gqdCBldmVyeXRoaW5nXCIuXHJcbiAgZnVuY3Rpb24gc2V0dXBPYmplY3RzKCkge1xyXG4gICAgbGV0IGNvcnJpZG9yV2lkdGggPSBnYW1lLnNjZW5lLmNvcnJpZG9yV2lkdGhcclxuICAgIGxldCBoYWxmQ29ycmlkb3JXaWR0aCA9IGdhbWUuc2NlbmUuY29ycmlkb3JXaWR0aCAqIDAuNVxyXG5cclxuICAgIGxldCBjaGFyU2l6ZSA9IGdhbWUuc2NlbmUuY2hhcmFjdGVyU2l6ZVxyXG4gICAgbGV0IGhhbGZDaGFyU2l6ZSA9IGdhbWUuc2NlbmUuY2hhcmFjdGVyU2l6ZSAqIDAuNVxyXG5cclxuICAgIGxldCBncm91bmQgPSAtZ2FtZS5zY2VuZS5jb3JyaWRvckVsZXZhdGlvbiAtIGhhbGZDaGFyU2l6ZVxyXG5cclxuXHJcbiAgICAvLyBDb3JyaWRvclxyXG4gICAgY29ycmlkb3Iud2lkdGggPSBnYW1lLnNjZW5lLmNvcnJpZG9yV2lkdGhcclxuICAgIGNvcnJpZG9yLmhhbGZXaWR0aCA9IGNvcnJpZG9yLndpZHRoICogMC41XHJcbiAgICBjb3JyaWRvci5sZW5ndGggPSBnYW1lLnNjZW5lLmNvcnJpZG9yTGVuZ3RoXHJcblxyXG4gICAgbGV0IHN0YXR1ZVkgPSBjb3JyaWRvci5wb3NpdGlvbi55LTY1XHJcbiAgICBsZXQgc3RhdHVlUmlnaHQgPSBjb3JyaWRvci5oYWxmV2lkdGgtNjRcclxuICAgIGxldCBzdGF0dWVMZWZ0ID0gLWNvcnJpZG9yLmhhbGZXaWR0aCs2NFxyXG4gICAgbGV0IHN0YXR1ZUJhY2sgPSAtY29ycmlkb3IubGVuZ3RoKjAuM1xyXG4gICAgbGV0IHN0YXR1ZUZyb250ID0gY29ycmlkb3IubGVuZ3RoKjAuM1xyXG5cclxuICAgIHN0YXR1ZXNbMF0gPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgICBmYWNlczogZ2FtZS5tZXNoZXMuc3RhdHVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMyhzdGF0dWVSaWdodCwgc3RhdHVlWSwgc3RhdHVlQmFjayksXHJcbiAgICAgICAgc2NhbGU6IG5ldyBtYXRocy5WZWN0b3IzKC0xLCAxLCAxKSxcclxuICAgICAgICBpZDogJ3N0YXR1ZSdcclxuICAgIH0pXHJcblxyXG4gICAgc3RhdHVlc1sxXSA9IG5ldyBvYmplY3RzLkdhbWVPYmplY3Qoe1xyXG4gICAgICBmYWNlczogZ2FtZS5tZXNoZXMuc3RhdHVlLFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoc3RhdHVlTGVmdCwgc3RhdHVlWSwgc3RhdHVlQmFjayksXHJcbiAgICAgIGlkOiAnc3RhdHVlJ1xyXG4gICAgfSlcclxuXHJcbiAgICBzdGF0dWVzWzJdID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBnYW1lLm1lc2hlcy5zdGF0dWUsXHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMyhzdGF0dWVSaWdodCwgc3RhdHVlWSwgc3RhdHVlRnJvbnQpLFxyXG4gICAgICBzY2FsZTogbmV3IG1hdGhzLlZlY3RvcjMoLTEsIDEsIDEpLFxyXG4gICAgICBpZDogJ3N0YXR1ZSdcclxuICAgIH0pXHJcblxyXG4gICAgc3RhdHVlc1szXSA9IG5ldyBvYmplY3RzLkdhbWVPYmplY3Qoe1xyXG4gICAgICBmYWNlczogZ2FtZS5tZXNoZXMuc3RhdHVlLFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoc3RhdHVlTGVmdCwgc3RhdHVlWSwgc3RhdHVlRnJvbnQpLFxyXG4gICAgICBpZDogJ3N0YXR1ZSdcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IGxpZ2h0UmF5UmlnaHQgPSBjb3JyaWRvci53aWR0aC00NTZcclxuICAgIGxldCBsaWdodFJheXNUb3BZID0gY29ycmlkb3IucG9zaXRpb24ueSAtIDIwMFxyXG4gICAgbGV0IGxpZ2h0UmF5c0JvdHRvbVkgPSBjb3JyaWRvci5wb3NpdGlvbi55IC0gMTIwXHJcbiAgICBsZXQgbGlnaHRSYXlzRnJvbnRaID0gMTg1XHJcbiAgICBsZXQgbGlnaHRSYXlzQmFja1ogPSAxMjVcclxuXHJcbiAgICBsaWdodFJheXNbMF0gPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IGdhbWUubWVzaGVzLmxpZ2h0UmF5LFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoXHJcbiAgICAgICAgbGlnaHRSYXlSaWdodCwgbGlnaHRSYXlzVG9wWSwgbGlnaHRSYXlzRnJvbnRaXHJcbiAgICAgICksXHJcbiAgICAgIHJvdGF0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygwLCAwLCA5MCksXHJcbiAgICAgIG9wYWNpdHk6IDAuMTIsXHJcbiAgICAgIGlkOiAnbGlnaHRyYXknXHJcbiAgICB9KVxyXG5cclxuICAgIGxpZ2h0UmF5c1sxXSA9IG5ldyBvYmplY3RzLkdhbWVPYmplY3Qoe1xyXG4gICAgICBmYWNlczogZ2FtZS5tZXNoZXMubGlnaHRSYXksXHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMyhcclxuICAgICAgICBsaWdodFJheVJpZ2h0LCBsaWdodFJheXNCb3R0b21ZLCBsaWdodFJheXNGcm9udFpcclxuICAgICAgKSxcclxuICAgICAgcm90YXRpb246IG5ldyBtYXRocy5WZWN0b3IzKDAsIDAsIDkwKSxcclxuICAgICAgb3BhY2l0eTogMC4xMixcclxuICAgICAgaWQ6ICdsaWdodHJheSdcclxuICAgIH0pXHJcblxyXG4gICAgbGlnaHRSYXlzWzJdID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBnYW1lLm1lc2hlcy5saWdodFJheSxcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKFxyXG4gICAgICAgIGxpZ2h0UmF5UmlnaHQsIGxpZ2h0UmF5c1RvcFksIGxpZ2h0UmF5c0JhY2taXHJcbiAgICAgICksXHJcbiAgICAgIHJvdGF0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygwLCAwLCA5MCksXHJcbiAgICAgIG9wYWNpdHk6IDAuMTIsXHJcbiAgICAgIGlkOiAnbGlnaHRyYXknXHJcbiAgICB9KVxyXG5cclxuICAgIGxpZ2h0UmF5c1szXSA9IG5ldyBvYmplY3RzLkdhbWVPYmplY3Qoe1xyXG4gICAgICBmYWNlczogZ2FtZS5tZXNoZXMubGlnaHRSYXksXHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMyhcclxuICAgICAgICBsaWdodFJheVJpZ2h0LCBsaWdodFJheXNCb3R0b21ZLCBsaWdodFJheXNCYWNrWlxyXG4gICAgICApLFxyXG4gICAgICByb3RhdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoMCwgMCwgOTApLFxyXG4gICAgICBvcGFjaXR5OiAwLjEyLFxyXG4gICAgICBpZDogJ2xpZ2h0cmF5J1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgLyogUXVhZHMgKi9cclxuICAgIGxpZ2h0UmF5c1s0XSA9IG5ldyBvYmplY3RzLkdhbWVPYmplY3Qoe1xyXG4gICAgICBmYWNlczogZ2FtZS5tZXNoZXMubGlnaHRRdWFkLFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoXHJcbiAgICAgICAgLTkwLCBjb3JyaWRvci5wb3NpdGlvbi55LTEsIGxpZ2h0UmF5c0Zyb250WlxyXG4gICAgICApXHJcbiAgICB9KVxyXG5cclxuICAgIGxpZ2h0UmF5c1s1XSA9IG5ldyBvYmplY3RzLkdhbWVPYmplY3Qoe1xyXG4gICAgICBmYWNlczogZ2FtZS5tZXNoZXMubGlnaHRRdWFkLFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoXHJcbiAgICAgICAgLTE3MCwgY29ycmlkb3IucG9zaXRpb24ueS0xLCBsaWdodFJheXNGcm9udFpcclxuICAgICAgKVxyXG4gICAgfSlcclxuXHJcbiAgICBsaWdodFJheXNbNl0gPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IGdhbWUubWVzaGVzLmxpZ2h0UXVhZCxcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKFxyXG4gICAgICAgIC05MCwgY29ycmlkb3IucG9zaXRpb24ueS0xLCBsaWdodFJheXNCYWNrWi0yMFxyXG4gICAgICApXHJcbiAgICB9KVxyXG5cclxuICAgIGxpZ2h0UmF5c1s3XSA9IG5ldyBvYmplY3RzLkdhbWVPYmplY3Qoe1xyXG4gICAgICBmYWNlczogZ2FtZS5tZXNoZXMubGlnaHRRdWFkLFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoXHJcbiAgICAgICAgLTE3MCwgY29ycmlkb3IucG9zaXRpb24ueS0xLCBsaWdodFJheXNCYWNrWi0yMFxyXG4gICAgICApXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICAvLyBCbHVlXHJcbiAgICBibHVlLnBvc2l0aW9uLnNldChcclxuICAgICAgZ2V0UmFuZG9tQ2hhclgoKSwgZ3JvdW5kLCBnYW1lLnNjZW5lLmNoYXJhY3RlclNlcGFyYXRpb25cclxuICAgIClcclxuICAgIGJsdWUuYm91bmRzLnNldChjaGFyU2l6ZSwgY2hhclNpemUsIGNoYXJTaXplKVxyXG4gICAgYmx1ZS52ZWxvY2l0eSA9IG5ldyBtYXRocy5WZWN0b3IzKDEsIDAsIDApXHJcbiAgICBibHVlLnNwZWVkID0gZ2FtZS5waHlzaWNzLmluaXRpYWxDaGFyYWN0ZXJTcGVlZFxyXG4gICAgYmx1ZS5tYXNzID0gODBcclxuICAgIGJsdWUuanVtcEZvcmNlID0gLTI0MFxyXG4gICAgYmx1ZS5qdW1wTXVsID0gMS4wXHJcbiAgICBibHVlLmFuaW1Sb3QgPSAwXHJcbiAgICBibHVlLmlzSnVtcGluZyA9IGZhbHNlXHJcbiAgICBibHVlLmp1bXBDb3VudCA9IDBcclxuXHJcblxyXG4gICAgLy8gUmVkXHJcbiAgICByZWQucG9zaXRpb24uc2V0KFxyXG4gICAgICBnZXRSYW5kb21DaGFyWCgpLCBncm91bmQsIC1nYW1lLnNjZW5lLmNoYXJhY3RlclNlcGFyYXRpb25cclxuICAgIClcclxuICAgIHJlZC5ib3VuZHMuc2V0KGNoYXJTaXplLCBjaGFyU2l6ZSwgY2hhclNpemUpXHJcbiAgICByZWQudmVsb2NpdHkgPSBuZXcgbWF0aHMuVmVjdG9yMygtMSwgMCwgMClcclxuICAgIHJlZC5zcGVlZCA9IGdhbWUucGh5c2ljcy5pbml0aWFsQ2hhcmFjdGVyU3BlZWRcclxuICAgIHJlZC5tYXNzID0gODBcclxuICAgIHJlZC5qdW1wRm9yY2UgPSAtMjQwXHJcbiAgICByZWQuanVtcE11bCA9IDEuMFxyXG4gICAgcmVkLmFuaW1Sb3QgPSAwXHJcbiAgICByZWQuaXNKdW1waW5nID0gZmFsc2VcclxuICAgIHJlZC5qdW1wQ291bnQgPSAwXHJcblxyXG5cclxuICAgIC8vIEF4ZVxyXG4gICAgYXhlLmJvdW5kcy5zZXQoXHJcbiAgICAgIGdhbWUuc2NlbmUuYXhlU2l6ZSwgZ2FtZS5zY2VuZS5heGVTaXplLCBnYW1lLnNjZW5lLmF4ZVNpemVcclxuICAgIClcclxuICAgIGF4ZS52ZWxvY2l0eSA9IG5ldyBtYXRocy5WZWN0b3IzKClcclxuICAgIGF4ZS5kYW1waW5nID0gZ2FtZS5waHlzaWNzLmF4ZURhbXBpbmdcclxuICAgIGF4ZS5tYXNzID0gZ2FtZS5waHlzaWNzLmF4ZU1hc3NcclxuICAgIGF4ZS5ib3VuY2luZXNzID0gZ2FtZS5waHlzaWNzLmF4ZUJvdW5jaW5lc3NcclxuXHJcblxyXG4gICAgLy8gQXJyb3dcclxuICAgIGFycm93LnJvdGF0aW9uID0gYXJyb3cucm9vdC50cmFuc2Zvcm0ucm90YXRpb25cclxuICAgIGFycm93LmRpcmVjdGlvbiA9IC05MFxyXG4gICAgYXJyb3cuYW5pbVNwZWVkID0gZ2FtZS5hcnJvd0FpbS5hbmltU3BlZWRcclxuICAgIGFycm93LmFuaW1EaXIgPSAxXHJcbiAgICBhcnJvdy5tZXNoLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoMCwgMCwgLTQ1KVxyXG4gICAgYXJyb3cubWVzaC5jbGFzc0xpc3QuYWRkKCdzbW9vdGhGYWRlJylcclxuXHJcblxyXG4gICAgLy8gQ2lyY2xlIG1hcmtlclxyXG4gICAgaW1wYWN0TWFya2VyLnNldE9wYWNpdHkoMClcclxuICAgIGltcGFjdE1hcmtlci5tZXNoLmNsYXNzTGlzdC5hZGQoJ3Ntb290aEZhZGUnKVxyXG4gICAgaW1wYWN0TWFya2VyLnBvc2l0aW9uLnNldCgwLCBjb3JyaWRvci5wb3NpdGlvbi55LCAwKVxyXG4gICAgaW1wYWN0TWFya2VyLnVwZGF0ZSgpXHJcblxyXG4gICAgLy8gU2NyZWVuIGZsYXNoXHJcbiAgICBzY3JlZW5GbGFzaC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRPYmplY3RzKCkge1xyXG4gICAgd29ybGQuYWRkKGNvcnJpZG9yKVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB3b3JsZC5hZGQoc3RhdHVlc1tpXSlcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpZ2h0UmF5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB3b3JsZC5hZGQobGlnaHRSYXlzW2ldKVxyXG4gICAgfVxyXG5cclxuICAgIHdvcmxkLmFkZChibHVlKVxyXG4gICAgd29ybGQuYWRkKGJsdWVTaGFkb3dCbG9iKVxyXG4gICAgd29ybGQuYWRkKGJsdWVUYWcpXHJcblxyXG4gICAgd29ybGQuYWRkKHJlZClcclxuICAgIHdvcmxkLmFkZChyZWRTaGFkb3dCbG9iKVxyXG4gICAgd29ybGQuYWRkKHJlZFRhZylcclxuXHJcbiAgICB3b3JsZC5hZGQoYXhlKVxyXG4gICAgd29ybGQuYWRkKHNoYWRvd0Jsb2IpXHJcbiAgICB3b3JsZC5hZGQoaGl0KVxyXG4gICAgd29ybGQuYWRkKGNoYXJIaXQpXHJcblxyXG4gICAgd29ybGQuYWRkKGFycm93KVxyXG4gICAgd29ybGQuYWRkKGltcGFjdE1hcmtlcilcclxuICB9XHJcblxyXG5cclxuICAvL1xyXG4gIC8vIEdlbmVyYWwgZ2FtZSBpbml0aWFsaXphdGlvbi5cclxuICAvL1xyXG5cclxuICBnYW1lLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIGdhbWUubW9kZSA9IHNoYXJlZC5zZWxlY3RlZEdhbWVNb2RlID09PSBcclxuICAgICAgJ3NpbmdsZScgPyBHQU1FX01PREVfU0lOR0xFIDogR0FNRV9NT0RFX01VTFRJXHJcblxyXG4gICAgLy9pZiAoZ2FtZS5tb2RlID09PSBHQU1FX01PREVfU0lOR0xFKSB7XHJcbiAgICAgIC8vLy9nYW1lLnZpZXcuZW5hYmxlQWltRm9jdXMgPSBmYWxzZVxyXG4gICAgICAvLy8vVEVTVElOR1xyXG4gICAgICAvL2dhbWUudmlldy5lbmFibGVBaW1Gb2N1cyA9IHRydWVcclxuXHJcbiAgICAgIC8vLy9zaGFyZWQuc2ltdWxhdGlvbi50aW1lU2NhbGUgPSAwXHJcbiAgICAgIC8vc2hhcmVkLnNpbXVsYXRpb24udGltZVNjYWxlID0gMVxyXG4gICAgICAvL2dhbWUucGF1c2VkID0gZmFsc2VcclxuICAgICAgLy8vL2dhbWUub2xkSGlTY29yZSA9IHNoYXJlZC5oaVNjb3JlXHJcbiAgICAvL30gZWxzZSB7XHJcbiAgICAgIC8vZ2FtZS52aWV3LmVuYWJsZUFpbUZvY3VzID0gdHJ1ZVxyXG4gICAgICAvL3NoYXJlZC5zaW11bGF0aW9uLnRpbWVTY2FsZSA9IDFcclxuICAgICAgLy9nYW1lLnBhdXNlZCA9IGZhbHNlXHJcbiAgICAvL31cclxuICAgIGdhbWUudmlldy5lbmFibGVBaW1Gb2N1cyA9IHRydWVcclxuICAgIHNoYXJlZC5zaW11bGF0aW9uLnRpbWVTY2FsZSA9IDFcclxuICAgIGdhbWUucGF1c2VkID0gZmFsc2VcclxuXHJcbiAgICBncmFwaGljcy5zZXRCYWNrZ3JvdW5kQ29sb3Ioc2hhcmVkLmNvbG9ycy5iYWNrZ3JvdW5kKVxyXG5cclxuICAgIGNhbWVyYS5zZXRSb3RhdGlvbihnYW1lLnZpZXcueWF3LCBnYW1lLnZpZXcucGl0Y2gsIDApXHJcbiAgICBjYW1lcmEuem9vbShnYW1lLnZpZXcuem9vbSlcclxuICAgIGNhbWVyYS5wZXJzcGVjdGl2ZSA9IDU0MCAvLyA1OTBcclxuXHJcbiAgICBnYW1lLmZpbmlzaGVkID0gZmFsc2VcclxuICAgIGdhbWUudHVybiA9IEdBTUVfVFVSTl9CTFVFXHJcbiAgICBnYW1lLnNjb3JlQmx1ZSA9IDBcclxuICAgIGdhbWUuc2NvcmVSZWQgPSAwXHJcbiAgICBjYW1TaWRlID0gMVxyXG4gICAgaXNBaW1pbmcgPSB0cnVlXHJcbiAgICBpc0FjY3VtdWxhdGluZ0ZvcmNlID0gZmFsc2VcclxuXHJcbiAgICBjcmVhdGVPYmplY3RzKClcclxuICAgIHNldHVwT2JqZWN0cygpXHJcbiAgICBhZGRPYmplY3RzKClcclxuXHJcbiAgICAvL2lmIChnYW1lLm1vZGUgPT09IEdBTUVfTU9ERV9NVUxUSSlcclxuICAgICAgLy90aW1lci5zdGFydChnYW1lLnRocm93VGltZXIpXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gYmVnaW5NYXRjaCgpIHtcclxuICAgIGdhbWUucGF1c2VkID0gZmFsc2VcclxuICAgIC8vZ3VpLnJlbW92ZUVsZW1lbnQobGFiZWxTdGFydClcclxuICAgIC8vZ3VpLnJlbW92ZUVsZW1lbnQobGFiZWxIaVNjb3JlKVxyXG4gICAgZ3VpLnJlbW92ZUVsZW1lbnQobGFiZWxOZXdIaVNjb3JlKVxyXG4gICAgc2hhcmVkLnNpbXVsYXRpb24udGltZVNjYWxlID0gMVxyXG4gICAgZ2FtZS5zY29yZUJsdWUgPSAwXHJcbiAgICB1cGRhdGVHVUkoKVxyXG4gIH1cclxuXHJcbiAgLy9cclxuICAvLyBNYWluIHVwZGF0ZS5cclxuICAvL1xyXG5cclxuICBsZXQgc2hha2VDYW1lcmEgPSBmYWxzZVxyXG4gIGdhbWUudXBkYXRlID0gZnVuY3Rpb24oZHQpIHtcclxuICAgIGlmICghZ2FtZS5maW5pc2hlZCkge1xyXG4gICAgICBpZiAoZ2FtZS5tb2RlID09PSBHQU1FX01PREVfU0lOR0xFKSB7XHJcbiAgICAgICAgaWYgKGdhbWUucGF1c2VkKSB7XHJcbiAgICAgICAgICBpZiAoaW5wdXQuZ2V0S2V5SnVzdFByZXNzZWQoc2hhcmVkLmJsdWVBY3Rpb25LZXkpIHx8IFxyXG4gICAgICAgICAgICBpbnB1dC50YXBKdXN0UmVsZWFzZWQoKSlcclxuICAgICAgICAgICAgYmVnaW5NYXRjaCgpXHJcblxyXG4gICAgICAgICAgcGxheUxvY2tRdWV1ZSA9IFtdXHJcbiAgICAgICAgICBjbGVhclRpbWVvdXQoYXVkaW9UaW1lcilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhbVNpZGUgPSBjYW1lcmEudHJhbnNmb3JtLnJvdGF0aW9uLnkgPiA5MCA/IC0xIDogMVxyXG5cclxuICAgICAgaWYgKGdhbWUudHVybiA9PT0gR0FNRV9UVVJOX0JMVUUpIHtcclxuICAgICAgICBibHVlVHVybihkdClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZWRUdXJuKGR0KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXNBY2N1bXVsYXRpbmdGb3JjZSkge1xyXG4gICAgICAgIGFjY3VtdWxhdGVTaG9vdEZvcmNlKGR0KVxyXG4gICAgICAgIGNhbGN1bGF0ZUltcGFjdFBvc2l0aW9uKGR0KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoYXhlLmFjdGl2ZSkge1xyXG4gICAgICAgIHVwZGF0ZUF4ZShkdClcclxuICAgICAgICBzaGFkb3dCbG9iLnBvc2l0aW9uLnNldChcclxuICAgICAgICAgICAgYXhlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIC1nYW1lLnNjZW5lLmNvcnJpZG9yRWxldmF0aW9uLTEsXHJcbiAgICAgICAgICAgIGF4ZS5wb3NpdGlvbi56XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBibHVlU2hhZG93QmxvYi5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgYmx1ZS5wb3NpdGlvbi54LCAtZ2FtZS5zY2VuZS5jb3JyaWRvckVsZXZhdGlvbiwgYmx1ZS5wb3NpdGlvbi56XHJcbiAgICAgIClcclxuICAgICAgcmVkU2hhZG93QmxvYi5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgcmVkLnBvc2l0aW9uLngsIC1nYW1lLnNjZW5lLmNvcnJpZG9yRWxldmF0aW9uLCByZWQucG9zaXRpb24uelxyXG4gICAgICApXHJcblxyXG4gICAgICBibHVlVGFnLnBvc2l0aW9uLnNldChibHVlLnBvc2l0aW9uLngsIC0yNDAsIGJsdWUucG9zaXRpb24uei04KVxyXG4gICAgICByZWRUYWcucG9zaXRpb24uc2V0KHJlZC5wb3NpdGlvbi54LCAtMjQwLCByZWQucG9zaXRpb24ueis4KVxyXG5cclxuICAgICAgYmx1ZVRhZy51cGRhdGUoKVxyXG4gICAgICByZWRUYWcudXBkYXRlKClcclxuXHJcbiAgICAgIHVwZGF0ZUVudGl0aWVzKClcclxuXHJcbiAgICAgIGlmIChnYW1lLnNjb3JlQmx1ZSA+PSBzaGFyZWQuZ2FtZVNjb3JlIHx8IFxyXG4gICAgICAgIGdhbWUuc2NvcmVSZWQgPj0gc2hhcmVkLmdhbWVTY29yZSkgXHJcbiAgICAgIHtcclxuICAgICAgICBlbmRHYW1lKGdhbWUuc2NvcmVCbHVlID4gZ2FtZS5zY29yZVJlZCA/IDEgOiAwKVxyXG4gICAgICAgIGdhbWUuZmluaXNoZWQgPSB0cnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vaWYgKGdhbWUubW9kZSA9PT0gR0FNRV9NT0RFX01VTFRJKSB7XHJcbiAgICAgICAgLy91cGRhdGVUaHJvd1RpbWVyKGR0KVxyXG4gICAgICAvL31cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDYW1lcmEoZHQpXHJcbiAgICBhbmltYXRlKGR0KVxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVRocm93VGltZXIoZHQpIHtcclxuICAgIGxhYmVsVGhyb3dUaW1lLmlubmVySFRNTCA9IE1hdGguYWJzKGdhbWUudGhyb3dUaW1lci50aW1lLnRvRml4ZWQoMCkpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlbmRHYW1lKHdpbm5lcikge1xyXG4gICAgbGV0IGxhYmVsV2lubmVyID0gZ3VpLmNyZWF0ZUxhYmVsKFxyXG4gICAgICB3aW5uZXI/J0JsdWUgcGxheWVyIHdpbnMhJzonUmVkIHBsYXllciB3aW5zISdcclxuICAgIClcclxuICAgIGxhYmVsV2lubmVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtc2NvcmUnKVxyXG4gICAgbGFiZWxXaW5uZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMjAwcHgpIHRyYW5zbGF0ZVkoMjAwcHgpJ1xyXG4gICAgbGFiZWxXaW5uZXIuc3R5bGUud2lkdGggPSAnMzAwcHgnXHJcblxyXG4gICAgbGV0IGxhYmVsUmVtYXRjaCA9IGd1aS5jcmVhdGVMYWJlbCgnUmVtYXRjaD8nKVxyXG4gICAgbGFiZWxSZW1hdGNoLmNsYXNzTGlzdC5hZGQoJ3RleHQtc2NvcmUnKVxyXG4gICAgbGFiZWxSZW1hdGNoLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDIwMHB4KSB0cmFuc2xhdGVZKDM1MHB4KSdcclxuICAgIGxhYmVsUmVtYXRjaC5zdHlsZS5mb250U2l6ZSA9ICc2MHB4J1xyXG4gICAgbGFiZWxSZW1hdGNoLnN0eWxlLndpZHRoID0gJzMwMHB4J1xyXG5cclxuICAgIGxldCBidG5SZW1hdGNoID0gZ3VpLmNyZWF0ZUJ1dHRvbihcclxuICAgICAgJ2Fzc2V0cy9pbWFnZXMvYnRuQXJyb3cucG5nJyxcclxuICAgICAge1xyXG4gICAgICAgIG9ubW91c2VvdmVyOiAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5zcmNFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFxyXG4gICAgICAgICAgICAndHJhbnNsYXRlWCgxODBweCkgdHJhbnNsYXRlWSg0MjBweCkgc2NhbGVYKDIuNSkgc2NhbGVZKDIuNSknXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25tb3VzZWxlYXZlOiAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5zcmNFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFxyXG4gICAgICAgICAgICAndHJhbnNsYXRlWCgxODBweCkgdHJhbnNsYXRlWSg0MjBweCkgc2NhbGVYKDIpIHNjYWxlWSgyKSdcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvbm1vdXNlZG93bjogKGUpID0+IHtcclxuICAgICAgICAgIGUuc3JjRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcclxuICAgICAgICAgICAgJ3RyYW5zbGF0ZVgoMTgwcHgpIHRyYW5zbGF0ZVkoNDIwcHgpIHNjYWxlWCgxLjUpIHNjYWxlWSgxLjUpJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9ubW91c2V1cDogKGUpID0+IHtcclxuICAgICAgICAgIGUuc3JjRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcclxuICAgICAgICAgICAgJ3RyYW5zbGF0ZVgoMTgwcHgpIHRyYW5zbGF0ZVkoNDIwcHgpIHNjYWxlWCgyLjUpIHNjYWxlWSgyLjUpJ1xyXG4gICAgICAgICAgdXRvcHkuc3dpdGNoU3RhdGUoJ3BsYXlzdGF0ZScpXHJcbiAgICAgICAgICAvL2dhbWUuZmluaXNoZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKVxyXG5cclxuICAgIGJ0blJlbWF0Y2guc3R5bGUudHJhbnNmb3JtID0gXHJcbiAgICAgICd0cmFuc2xhdGVYKDE4MHB4KSB0cmFuc2xhdGVZKDQyMHB4KSBzY2FsZVgoMi41KSBzY2FsZVkoMi41KSdcclxuICAgIC8qXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZ2FtZS5maW5pc2hlZCA9IGZhbHNlXHJcbiAgICAgIHV0b3B5LnN3aXRjaFN0YXRlKCdjaGFyc2VsZWN0c3RhdGUnKVxyXG4gICAgfSwgNDAwMCkqL1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYW5pbWF0ZShkdCkge1xyXG4gICAgaWYgKGlzQWltaW5nKSB7XHJcbiAgICAgIGFuaW1hdGVBcnJvdyhkdClcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlZC5hY3RpdmUpIHtcclxuICAgICAgYW5pbUNoYXJEZWF0aChyZWQsIGR0KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghYmx1ZS5hY3RpdmUpIHtcclxuICAgICAgYW5pbUNoYXJEZWF0aChibHVlLCBkdClcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGl0LmFjdGl2ZSkge1xyXG4gICAgICBoaXQubWVzaC5zdHlsZS5vcGFjaXR5IC09IDIuNSAqIGR0XHJcbiAgICAgIGlmIChoaXQubWVzaC5zdHlsZS5vcGFjaXR5IDw9IDApIHtcclxuICAgICAgICBoaXQuc2V0VmlzaWJsZShmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChzY3JlZW5GbGFzaC5zdHlsZS5vcGFjaXR5ID4gMCkge1xyXG4gICAgICBzY3JlZW5GbGFzaC5zdHlsZS5vcGFjaXR5IC09IGR0ICogMTBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEkgZG8gbmVlZCBzb21lIGJhc2ljIGZha2UtcGh5c2ljcyBlbmdpbmUgdG8gYXZvaWQgdGhpcyxcclxuICAvLyBraW5kIG9mIHRoaW5nLiBUaGlzIGlzIGRlZmluaXRlbHkgb24gbXkgdG9kby1saXN0LlxyXG4gIGZ1bmN0aW9uIGFuaW1DaGFyRGVhdGgoY2hhciwgZHQpIHtcclxuICAgIGNoYXIucm90YXRpb24ueiArPSBcclxuICAgICAgLU1hdGguc2lnbihjaGFyLnZlbG9jaXR5LngrMSkgKiAoMTAgKiAoY2hhci52ZWxvY2l0eS56ICogMC4yKSkgKiBkdFxyXG5cclxuICAgIGlmKGNoYXIuZ2V0Qm91bmRzQm90dG9tKCkgPD0gLWdhbWUuc2NlbmUuY29ycmlkb3JFbGV2YXRpb24pXHJcbiAgICAgIGNoYXIudmVsb2NpdHkueSArPSAzMDAwICogZHRcclxuXHJcbiAgICBsZXQgZGFtcCA9IE1hdGgucG93KDAuMjUsIGR0KVxyXG4gICAgY2hhci52ZWxvY2l0eS54ICo9IGRhbXBcclxuICAgIGNoYXIudmVsb2NpdHkueiAqPSBkYW1wXHJcblxyXG4gICAgY2hhci5wb3NpdGlvbi54ICs9IGNoYXIudmVsb2NpdHkueCAqIGR0XHJcbiAgICBjaGFyLnBvc2l0aW9uLnkgKz0gY2hhci52ZWxvY2l0eS55ICogZHRcclxuICAgIGNoYXIucG9zaXRpb24ueiArPSBjaGFyLnZlbG9jaXR5LnogKiBkdFxyXG5cclxuICAgIGlmIChjaGFyLmdldEJvdW5kc0xlZnQoKSA8PSAtY29ycmlkb3IuaGFsZldpZHRoKSB7XHJcbiAgICAgIGNoYXIucG9zaXRpb24ueCArPSAxXHJcbiAgICAgIGNoYXIudmVsb2NpdHkueCAqPSAtMVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFyLmdldEJvdW5kc1JpZ2h0KCkgPj0gY29ycmlkb3IuaGFsZldpZHRoKSB7XHJcbiAgICAgIGNoYXIucG9zaXRpb24ueCAtPSAxMFxyXG4gICAgICBjaGFyLnZlbG9jaXR5LnggKj0gLTFcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhci5nZXRCb3VuZHNCb3R0b20oKSA+PSAtZ2FtZS5zY2VuZS5jb3JyaWRvckVsZXZhdGlvbikge1xyXG4gICAgICBjaGFyLnBvc2l0aW9uLnkgLT0gMVxyXG4gICAgICBjaGFyLnZlbG9jaXR5LnkgLz0gLTEuNFxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFyLnZlbG9jaXR5Lmxlbmd0aCgpIDwgNTAwICYmICFheGUuYWN0aXZlKSB7XHJcbiAgICAgIGNoYXIudmVsb2NpdHkuc2V0KGdhbWUudHVybiA9PT0gR0FNRV9UVVJOX1JFRD8gMSA6IC0xLCAwLCAwKVxyXG4gICAgICBjaGFyLnBvc2l0aW9uLnNldChcclxuICAgICAgICAgIGdldFJhbmRvbUNoYXJYKCksXHJcbiAgICAgICAgICAtZ2FtZS5zY2VuZS5jb3JyaWRvckVsZXZhdGlvbitjaGFyLmJvdW5kcy55LFxyXG4gICAgICAgICAgKGdhbWUudHVybiA9PT0gR0FNRV9UVVJOX0JMVUUgJiYgIWJsdWUuYWN0aXZlPyBcclxuICAgICAgICAgICAgZ2FtZS5zY2VuZS5jaGFyYWN0ZXJTZXBhcmF0aW9uIFxyXG4gICAgICAgICAgICA6IC1nYW1lLnNjZW5lLmNoYXJhY3RlclNlcGFyYXRpb24pIC8vIEZJWE1FXHJcbiAgICAgIClcclxuICAgICAgY2hhci5yb3RhdGlvbi56ID0gMFxyXG4gICAgICBjaGFyLmFjdGl2ZSA9IHRydWVcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvL1xyXG4gIC8vIFR1cm4gc3R1ZmYuXHJcbiAgLy9cclxuXHJcbiAgZnVuY3Rpb24gZW50ZXJCbHVlVHVybigpIHtcclxuICAgIGJsdWUuaXNKdW1waW5nID0gZmFsc2VcclxuICAgIGJsdWUuanVtcENvdW50ID0gMFxyXG4gICAgYmx1ZS5qdW1wTXVsID0gMS4wXHJcbiAgICBibHVlLmFuaW1Sb3QgPSAwXHJcbiAgICBnYW1lLnR1cm4gPSBHQU1FX1RVUk5fQkxVRVxyXG4gICAgYmx1ZS5yb3RhdGlvbi56ID0gMFxyXG4gICAgYWRqdXN0QXJyb3dEaXJlY3Rpb24oMClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVudGVyUmVkVHVybigpIHtcclxuICAgIHJlZC5pc0p1bXBpbmcgPSBmYWxzZVxyXG4gICAgcmVkLmp1bXBDb3VudCA9IDBcclxuICAgIHJlZC5qdW1wTXVsID0gMS4wXHJcbiAgICByZWQuYW5pbVJvdCA9IDBcclxuICAgIGdhbWUudHVybiA9IEdBTUVfVFVSTl9SRURcclxuICAgIHJlZC5yb3RhdGlvbi56ID0gMFxyXG4gICAgYWRqdXN0QXJyb3dEaXJlY3Rpb24oLTE4MClcclxuICB9XHJcblxyXG4gIC8vIEZJWE1FXHJcbiAgZnVuY3Rpb24gdHJ5U3dpdGNoVHVybnMoKSB7XHJcbiAgICAvL2lmICghaXNBaW1pbmcgJiYgIWF4ZS5hY3RpdmUpIHtcclxuICAgIC8vX2woJ3N3aXRjaCcpXHJcbiAgICAgIHN3aXRjaFR1cm5zKClcclxuICAgIC8vfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3dpdGNoVHVybnMoKSB7XHJcbiAgICBhcnJvdy51cGRhdGUoKVxyXG4gICAgaXNBSVdhaXRpbmc9ZmFsc2VcclxuICAgIGNhblNob290PWZhbHNlXHJcblxyXG4gICAgaWYgKGdhbWUudHVybiA9PT0gR0FNRV9UVVJOX0JMVUUpIHtcclxuICAgICAgZW50ZXJSZWRUdXJuKClcclxuICAgIH0gZWxzZSBpZiAoZ2FtZS50dXJuID09PSBHQU1FX1RVUk5fUkVEKSB7XHJcbiAgICAgIGVudGVyQmx1ZVR1cm4oKVxyXG4gICAgfVxyXG5cclxuICAgIC8vaWYgKGdhbWUubW9kZSA9PT0gR0FNRV9NT0RFX01VTFRJKSB7XHJcbiAgICAgIC8vdGltZXIucmVzZXQoZ2FtZS50aHJvd1RpbWVyKVxyXG4gICAgLy99XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYXNQcmVzc2VkU2hvb3QoKSB7XHJcbiAgICBpZiAoZ2FtZS5wYXVzZWQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHllYWggPSBudWxsXHJcblxyXG4gICAgaWYgKGdhbWUudHVybiA9PT0gR0FNRV9UVVJOX0JMVUUpIHtcclxuICAgICAgeWVhaCA9IGlucHV0LmdldEtleUp1c3RQcmVzc2VkKHNoYXJlZC5ibHVlQWN0aW9uS2V5KSBcclxuICAgICAgICB8fCBpbnB1dC50YXBKdXN0UmVsZWFzZWQoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeWVhaCA9IFxyXG4gICAgICAgIGlucHV0LmdldEtleUp1c3RQcmVzc2VkKHNoYXJlZC5yZWRBY3Rpb25LZXkpIFxyXG4gICAgICAgIHx8IGlucHV0LnRhcEp1c3RSZWxlYXNlZCgpXHJcbiAgICB9XHJcblxyXG4gICAgLy9yZXR1cm4gKGlucHV0LmdldEtleUp1c3RQcmVzc2VkKGlucHV0LmtleXMuc3BhY2UpIFxyXG4gICAgLy98fCBpbnB1dC50YXBKdXN0UmVsZWFzZWQoKSkgJiYgIWdhbWUucGF1c2VkXHJcbiAgICByZXR1cm4geWVhaFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcHJlcGFyZVNob290KGNoYXIpIHtcclxuICAgIGlmICghaXNBY2N1bXVsYXRpbmdGb3JjZSAmJiBoYXNQcmVzc2VkU2hvb3QoKSAmJiAhYXhlLmFjdGl2ZSkge1xyXG4gICAgICB0aHJvd0luZm8ub3JpZ2luLnggPSBjaGFyLnBvc2l0aW9uLnhcclxuICAgICAgdGhyb3dJbmZvLm9yaWdpbi55ID0gY2hhci5wb3NpdGlvbi55XHJcbiAgICAgIHRocm93SW5mby5vcmlnaW4ueiA9IGNoYXIucG9zaXRpb24uelxyXG4gICAgICBpbXBhY3RNYXJrZXIuc2V0T3BhY2l0eSgxKVxyXG4gICAgICBpc0FjY3VtdWxhdGluZ0ZvcmNlID0gdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWltVG9TaG9vdChjaGFyKSB7XHJcbiAgICBpZiAoIWlzQWNjdW11bGF0aW5nRm9yY2UgJiYgIWF4ZS5hY3RpdmUpIHtcclxuICAgICAgdGhyb3dJbmZvLm9yaWdpbi54ID0gY2hhci5wb3NpdGlvbi54XHJcbiAgICAgIHRocm93SW5mby5vcmlnaW4ueSA9IGNoYXIucG9zaXRpb24ueVxyXG4gICAgICB0aHJvd0luZm8ub3JpZ2luLnogPSBjaGFyLnBvc2l0aW9uLnpcclxuICAgICAgaW1wYWN0TWFya2VyLnNldE9wYWNpdHkoMSlcclxuICAgICAgaXNBY2N1bXVsYXRpbmdGb3JjZSA9IHRydWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBjYW5TaG9vdCA9IGZhbHNlLCBpc0FJV2FpdGluZyA9IGZhbHNlXHJcbiAgLy8gTWFrZSBBSSBhbHdheXMgc2hvb3QgcGVyZmVjdGx5IGF0IHRoZSBvcHBvbmVudCdzIHBvc2l0aW9uLi4uIFxyXG4gIC8vIFRoZW9yZXRpY2FsbHkuLi5cclxuICBmdW5jdGlvbiBjaGVja1Nob290aW5nKGNoYXIpIHtcclxuICAgIGlmKGdhbWUubW9kZSA9PT0gR0FNRV9NT0RFX1NJTkdMRSAmJiBnYW1lLnR1cm4gPT09IEdBTUVfVFVSTl9SRUQpIHtcclxuICAgICAgbGV0IG9wcCA9IGdhbWUudHVybiA9PT0gR0FNRV9UVVJOX0JMVUUgPyByZWQgOiBibHVlXHJcbiAgICAgIGxldCBvcHBYID0gb3BwLnBvc2l0aW9uLnhcclxuICAgICAgbGV0IG9wcFZlbFggPSBvcHAudmVsb2NpdHkueCAqIGNhbVNpZGVcclxuICAgICAgbGV0IHh4ID0gMFxyXG4gICAgICBsZXQgcyA9IGdhbWUucGh5c2ljcy5pbml0aWFsQ2hhcmFjdGVyU3BlZWQgKyAxMFxyXG5cclxuICAgICAgeHggPSBvcHBYXHJcbiAgICAgIHh4ICs9IChzICogb3BwVmVsWCAqIGNhbVNpZGUpXHJcblxyXG4gICAgICBsZXQgbGwgPSAxOTBcclxuICAgICAgaWYgKHh4ID4gbGwpIHtcclxuICAgICAgICBpZiAob3BwVmVsWCAqIC1jYW1TaWRlID4gMClcclxuICAgICAgICAgIHh4ID0gKHh4Ly0xLjUpXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgeHggPSAoeHgvLTMpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh4eCA8IC1sbCkge1xyXG4gICAgICAgIGlmIChvcHBWZWxYICogLWNhbVNpZGUgPCAwKVxyXG4gICAgICAgICAgeHggPSAoeHgvLTEuNSlcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICB4eCA9ICh4eC8tMylcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHNoYXJlZC5zZWxlY3RlZENvcnJpZG9yID09ICdjb3JyaWRvckdvdmVybm1lbnQnKSB7XHJcbiAgICAgICAgeHggKz0gMjAwICogLWNhbVNpZGVcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVGhpcyBtYWtlcyBpdCBwb3NzaWJsZSB0byByZWR1Y2UgdGhlIEFJJ3MgZGlmZmljdWx0eSBieSBqdXN0XHJcbiAgICAgIC8vIGZyb20gY2hhbmdpbmcgb25lIHZhbHVlIVxyXG4gICAgICB4eCArPSBnYW1lLkFJX0VSUk9SICogKDEgKyBNYXRoLnJhbmRvbSgpICogMilcclxuXHJcbiAgICAgIGxldCBhbmdsZSA9IC0oKE1hdGguYXRhbjIob3BwLnBvc2l0aW9uLnogLSBjaGFyLnBvc2l0aW9uLnosIFxyXG4gICAgICAgIHh4IC0gY2hhci5wb3NpdGlvbi54KSAqIDE4MCAvIE1hdGguUEkpICsgOTApXHJcbiAgICAgIGxldCBhcnJUb1RhcmdldCA9IE1hdGguYWJzKGFycm93LnJvdGF0aW9uLnkgLSBhbmdsZSlcclxuXHJcbiAgICAgIGlmICghaXNBSVdhaXRpbmcpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGNhblNob290ID0gdHJ1ZVxyXG4gICAgICAgIH0sIDgwMCArIE1hdGgucmFuZG9tKCkgKiA1MDApXHJcbiAgICAgICAgaXNBSVdhaXRpbmcgPSB0cnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjYW5TaG9vdCkge1xyXG4gICAgICAgIGlmICghYXhlLmFjdGl2ZSAmJiAhaXNBY2N1bXVsYXRpbmdGb3JjZSkge1xyXG4gICAgICAgICAgaWYgKGFyclRvVGFyZ2V0IDwgMilcclxuICAgICAgICAgICAgYWltVG9TaG9vdChjaGFyKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hvb3NlIGEgZ29vZCB6IGRpc3RhbmNlIHRvIHNob290XHJcbiAgICAgICAgaWYgKGlzQWNjdW11bGF0aW5nRm9yY2UgJiYgIWF4ZS5hY3RpdmUpIHtcclxuICAgICAgICAgIGlmIChNYXRoLmFicyhpbXBhY3RNYXJrZXIucG9zaXRpb24ueiAtIG9wcC5wb3NpdGlvbi56KSA8PSAzMCkge1xyXG4gICAgICAgICAgICBzaG9vdEF4ZSgpXHJcbiAgICAgICAgICAgIGNhblNob290ID0gZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChjaGFyLmFjdGl2ZVxyXG4gICAgICAgICYmIChjaGFyLnBvc2l0aW9uLnogPD0gZ2FtZS5zY2VuZS5jaGFyYWN0ZXJTZXBhcmF0aW9uIFxyXG4gICAgICAgICAmJiBjaGFyLnBvc2l0aW9uLnogPj0gLWdhbWUuc2NlbmUuY2hhcmFjdGVyU2VwYXJhdGlvbikpIFxyXG4gICAgICB7XHJcbiAgICAgICAgcHJlcGFyZVNob290KGNoYXIpXHJcbiAgICAgICAgaWYgKGhhc1ByZXNzZWRTaG9vdCgpICYmIGlzQWNjdW11bGF0aW5nRm9yY2UgJiYgIWF4ZS5hY3RpdmUpIHtcclxuICAgICAgICAgIHNob290QXhlKClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUdVSSgpIHtcclxuICAgIC8vaWYgKGdhbWUubW9kZSA9PSBHQU1FX01PREVfU0lOR0xFKSB7XHJcbiAgICAgIC8vbGFiZWxTY29yZS5pbm5lckhUTUwgPSBnYW1lLnNjb3JlQmx1ZVxyXG4gICAgLy99IGVsc2Uge1xyXG4gICAgICAvL2xhYmVsU2NvcmUuaW5uZXJIVE1MID0gZ2FtZS5zY29yZUJsdWUgKyAneCcgKyBnYW1lLnNjb3JlUmVkXHJcbiAgICAvL31cclxuICAgIFxyXG4gICAgbGFiZWxTY29yZS5pbm5lckhUTUwgPSBnYW1lLnNjb3JlQmx1ZSArICd4JyArIGdhbWUuc2NvcmVSZWRcclxuICB9XHJcblxyXG4gIGxldCBjaGFyR3JvdW5kID0gXHJcbiAgICAoLWdhbWUuc2NlbmUuY29ycmlkb3JFbGV2YXRpb24gLSAoZ2FtZS5zY2VuZS5jaGFyYWN0ZXJTaXplICogMC41KSlcclxuICBmdW5jdGlvbiBibHVlVHVybihkdCkge1xyXG4gICAgYmx1ZS5wb3NpdGlvbi55ID0gY2hhckdyb3VuZFxyXG4gICAgY2hlY2tTaG9vdGluZyhibHVlKVxyXG5cclxuICAgIGlmIChyZWQuYWN0aXZlICYmIGNvbGxpZGVkV2l0aEF4ZShyZWQpIFxyXG4gICAgICAmJiBheGUudmVsb2NpdHkubGVuZ3RoKCkgPj0gNzAwKSB7XHJcbiAgICAgIGtpbGxDaGFyKHJlZClcclxuICAgICAgZ2FtZS5zY29yZUJsdWUrK1xyXG4gICAgICB1cGRhdGVHVUkoKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZWQuYWN0aXZlKSB7XHJcbiAgICAgIHBpbmdQb25nKHJlZCwgZHQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZWRUdXJuKGR0KSB7XHJcbiAgICByZWQucG9zaXRpb24ueSA9IGNoYXJHcm91bmRcclxuICAgIGNoZWNrU2hvb3RpbmcocmVkKVxyXG5cclxuICAgIGlmIChibHVlLmFjdGl2ZSAmJiBjb2xsaWRlZFdpdGhBeGUoYmx1ZSkgXHJcbiAgICAgICYmIGF4ZS52ZWxvY2l0eS5sZW5ndGgoKSA+PSA3MDApIHtcclxuXHJcbiAgICAgIC8vaWYgKGdhbWUubW9kZSA9PT0gR0FNRV9NT0RFX01VTFRJKSB7XHJcbiAgICAgICAgZ2FtZS5zY29yZVJlZCsrXHJcbiAgICAgICAgdXBkYXRlR1VJKClcclxuICAgICAgLy99XHJcblxyXG4gICAgICAvL2lmIChnYW1lLm1vZGUgPT09IEdBTUVfTU9ERV9TSU5HTEUpIHtcclxuICAgICAgICAvLy8vc2hhcmVkLmhpU2NvcmUgPSBNYXRoLm1heChzaGFyZWQuaGlTY29yZSwgZ2FtZS5zY29yZUJsdWUpXHJcbiAgICAgICAgLy9jcmVhdGVTY29yZVVJKHRydWUpXHJcbiAgICAgICAgLy9zZXRUaW1lb3V0KCgpPT57cGF1c2VHYW1lKCl9LCAzMDApXHJcbiAgICAgIC8vfVxyXG5cclxuICAgICAga2lsbENoYXIoYmx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYmx1ZS5hY3RpdmUpIHtcclxuICAgICAgcGluZ1BvbmcoYmx1ZSwgZHQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwYXVzZUdhbWUoKSB7XHJcbiAgICBnYW1lLnBhdXNlZCA9IHRydWVcclxuICAgIHNoYXJlZC5zaW11bGF0aW9uLnRpbWVTY2FsZSA9IDBcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGtpbGxFZmZlY3QoKSB7XHJcbiAgICBzY3JlZW5GbGFzaC5zdHlsZS5vcGFjaXR5ID0gMC44XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBraWxsQ2hhcihjaGFyKSB7XHJcbiAgICBwbGF5U291bmQoJ2F4ZU9uRmxlc2gnLCAyLCB0cnVlKVxyXG5cclxuICAgIGtpbGxGcmVlemUoKVxyXG4gICAgc2hha2VDYW1lcmEgPSB0cnVlXHJcblxyXG4gICAgY2hhci5hY3RpdmUgPSBmYWxzZVxyXG4gICAgY2hhci5wb3NpdGlvbi55IC09IGNoYXIuYm91bmRzLnkgKiAwLjJcclxuICAgIGNoYXIudmVsb2NpdHkuc2V0KClcclxuICAgIGNoYXIuaXNKdW1waW5nID0gZmFsc2VcclxuICAgIGNoYXIudmVsb2NpdHkueCA9IDYwMCAqIC1NYXRoLnNpZ24oYXhlLnZlbG9jaXR5LngpXHJcbiAgICBjaGFyLnZlbG9jaXR5LnkgPSBNYXRoLmFicyhheGUudmVsb2NpdHkueikgPiA0MDAgPyAtOTAwIDogLTI1MFxyXG4gICAgY2hhci52ZWxvY2l0eS56ID0gMiAqIGF4ZS52ZWxvY2l0eS56XHJcblxyXG4gICAgaXNBSVdhaXRpbmcgPSBmYWxzZVxyXG5cclxuICAgIHNob3dDaGFySGl0RWZmZWN0KClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGtpbGxGcmVlemUoKSB7XHJcbiAgICBzaGFyZWQuc2ltdWxhdGlvbi50aW1lU2NhbGUgPSAwLjAwMDFcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgc2hhcmVkLnNpbXVsYXRpb24udGltZVNjYWxlID0gMVxyXG4gICAgICBjaGFySGl0LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgIGNoYXJIaXQuc2V0VmlzaWJsZShmYWxzZSlcclxuICAgIH0sIDIwMClcclxuICAgIGtpbGxFZmZlY3QoKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkQ2hhckFuaW0oY2hhciwgYW5pbU5hbWUpIHtcclxuICAgIGlmICghY2hhci5tZXNoLmNsYXNzTGlzdC5jb250YWlucyhhbmltTmFtZSkpIHtcclxuICAgICAgY2hhci5tZXNoLmNsYXNzTGlzdC5hZGQoYW5pbU5hbWUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVDaGFyQW5pbShjaGFyLCBhbmltTmFtZSkge1xyXG4gICAgaWYgKGNoYXIubWVzaC5jbGFzc0xpc3QuY29udGFpbnMoYW5pbU5hbWUpKSB7XHJcbiAgICAgIGNoYXIubWVzaC5jbGFzc0xpc3QucmVtb3ZlKGFuaW1OYW1lKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGluZ1BvbmcoY2hhciwgZHQpIHtcclxuICAgIGlmIChjaGFyLmdldEJvdW5kc1JpZ2h0KCkgPj0gY29ycmlkb3IuaGFsZldpZHRoKSB7XHJcbiAgICAgIGNoYXIudmVsb2NpdHkueCA9IC0xXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYXIuZ2V0Qm91bmRzTGVmdCgpIDw9IC1jb3JyaWRvci5oYWxmV2lkdGgpIHtcclxuICAgICAgY2hhci52ZWxvY2l0eS54ID0gMVxyXG4gICAgfVxyXG5cclxuICAgIGNoYXIucG9zaXRpb24ueCArPSBjaGFyLnZlbG9jaXR5LnggKiBjaGFyLnNwZWVkICogZHRcclxuXHJcbiAgICBjaGFyLnBvc2l0aW9uLnkgPSBcclxuICAgICAgY2hhckdyb3VuZCArIE1hdGguY29zKG1hdGhzLlBJMiAqIChjaGFyLnBvc2l0aW9uLnggKiAwLjAxNzUpKSAqIDEyXHJcbiAgICBjaGFyLnJvdGF0aW9uLnogPSBNYXRoLnNpbihtYXRocy5QSTIgKiAoY2hhci5wb3NpdGlvbi54ICogMC4wMTc1KSkgXHJcbiAgICAgICogbWF0aHMuVE9fREVHICogKDAuMiAqIGNhbVNpZGUpXHJcbiAgfVxyXG5cclxuXHJcbiAgLy9cclxuICAvLyBQaHlzaWNzLlxyXG4gIC8vXHJcblxyXG4gIGZ1bmN0aW9uIGFjY3VtdWxhdGVTaG9vdEZvcmNlKGR0KSB7XHJcbiAgICBpc0FpbWluZyA9IGZhbHNlXHJcbiAgICB0aHJvd0luZm8uYW5nbGUgPSBhcnJvdy5kaXJlY3Rpb25cclxuXHJcbiAgICB0aHJvd0luZm8uYWNjdW11bGF0ZWRGb3JjZSArPSBcclxuICAgICAgTWF0aC5wb3coZ2FtZS5waHlzaWNzLnRocm93Rm9yY2VBY2N1bVNwZWVkLCAyKSAqIGR0XHJcblxyXG4gICAgdGhyb3dJbmZvLmFjY3VtdWxhdGVkRm9yY2UgPSBcclxuICAgICAgbWF0aHMuY2xhbXAodGhyb3dJbmZvLmFjY3VtdWxhdGVkRm9yY2UsIDAsIGdhbWUucGh5c2ljcy50aHJvd0ZvcmNlTWF4KVxyXG5cclxuICAgIHRocm93SW5mby5mb3JjZSA9IHRocm93SW5mby5hY2N1bXVsYXRlZEZvcmNlXHJcbiAgfVxyXG5cclxuICBsZXQgaW1wYWN0UG9zaXRpb24gPSB0aHJvd0luZm8uaW1wYWN0UG9zaXRpb25cclxuICBmdW5jdGlvbiBjYWxjdWxhdGVJbXBhY3RQb3NpdGlvbihkdCkge1xyXG4gICAgaW1wYWN0UG9zaXRpb24ueCA9IFxyXG4gICAgICBNYXRoLmNvcyh0aHJvd0luZm8uYW5nbGUgKiBtYXRocy5UT19SQUQpICogdGhyb3dJbmZvLmZvcmNlXHJcblxyXG4gICAgaW1wYWN0UG9zaXRpb24ueSA9IC10aHJvd0luZm8uZm9yY2VcclxuXHJcbiAgICBpbXBhY3RQb3NpdGlvbi56ID0gXHJcbiAgICAgIE1hdGguc2luKHRocm93SW5mby5hbmdsZSAqIG1hdGhzLlRPX1JBRCkgKiB0aHJvd0luZm8uZm9yY2VcclxuXHJcbiAgICBsZXQgZGFtcCA9IE1hdGgucG93KGF4ZS5kYW1waW5nLCBkdClcclxuICAgIGxldCBkZWx0YVkgPSBcclxuICAgICAgdGhyb3dJbmZvLmZvcmNlIC8gKChheGUubWFzcyAqIGdhbWUucGh5c2ljcy5ncmF2aXR5KSAqIDAuNSAqIGR0KSAqIGR0XHJcblxyXG4gICAgZGVsdGFZICo9IGRhbXAgKiAwLjg1XHJcblxyXG4gICAgaW1wYWN0TWFya2VyLnBvc2l0aW9uLnggPSBcclxuICAgICAgdGhyb3dJbmZvLm9yaWdpbi54ICsgKHRocm93SW5mby5pbXBhY3RQb3NpdGlvbi54ICogZGVsdGFZKVxyXG5cclxuICAgIGltcGFjdE1hcmtlci5wb3NpdGlvbi56ID0gXHJcbiAgICAgIHRocm93SW5mby5vcmlnaW4ueiArICh0aHJvd0luZm8uaW1wYWN0UG9zaXRpb24ueiAqIGRlbHRhWSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob290QXhlKCkge1xyXG4gICAgYXhlLmFjdGl2ZSA9IHRydWVcclxuICAgIGF4ZS5zZXRWaXNpYmxlKHRydWUpXHJcbiAgICBheGUuc2V0T3BhY2l0eSgxKVxyXG5cclxuICAgIGF4ZS5wb3NpdGlvbi5jb3B5KHRocm93SW5mby5vcmlnaW4pXHJcbiAgICBheGUudmVsb2NpdHkuY29weSh0aHJvd0luZm8uaW1wYWN0UG9zaXRpb24pXHJcblxyXG4gICAgaW1wYWN0TWFya2VyLnNldE9wYWNpdHkoMClcclxuICAgIHNoYWRvd0Jsb2Iuc2V0VmlzaWJsZSh0cnVlKVxyXG5cclxuICAgIGlzQWNjdW11bGF0aW5nRm9yY2UgPSBmYWxzZVxyXG4gICAgdGhyb3dJbmZvLmFjY3VtdWxhdGVkRm9yY2UgPSAwXHJcbiAgfVxyXG5cclxuICAvLyBOb3RlczpcclxuICAvLyAwIGlzIGJvdHRvbSxcclxuICAvLyAxIGlzIHJpZ2h0XHJcbiAgLy8gLTEgaXMgbGVmdFxyXG4gIC8vIDIgaXMgdG9wXHJcbiAgZnVuY3Rpb24gc2hvd0F4ZUhpdEVmZmVjdChwb3NpdGlvbikge1xyXG4gICAgaWYgKHBvc2l0aW9uID09PSAxIHx8IHBvc2l0aW9uID09PSAtMSkge1xyXG4gICAgICBsZXQgcnogPSAwXHJcbiAgICAgIHN3aXRjaChwb3NpdGlvbikge1xyXG4gICAgICAgIGNhc2UgMToge1xyXG4gICAgICAgICAgICByeiA9IDkwXHJcbiAgICAgICAgfSBicmVha1xyXG5cclxuICAgICAgICBjYXNlIC0xOiB7XHJcbiAgICAgICAgICAgIHJ6ID0gLTkwXHJcbiAgICAgICAgfSBicmVha1xyXG4gICAgICB9XHJcbiAgICAgIGhpdC5yb290LnRyYW5zZm9ybS5yb3RhdGlvbi56ID0gcnpcclxuICAgICAgaGl0LnJvb3QudHJhbnNmb3JtLnJvdGF0aW9uLnkgPSAwXHJcbiAgICAgIGhpdC5yb290LnRyYW5zZm9ybS5yb3RhdGlvbi54ID0gTWF0aC5yYW5kb20oKSAqIDM2MFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGl0LnJvb3QudHJhbnNmb3JtLnJvdGF0aW9uLnkgPSBNYXRoLnJhbmRvbSgpICogMzYwXHJcbiAgICAgIGhpdC5yb290LnRyYW5zZm9ybS5yb3RhdGlvbi54ID0gKHBvc2l0aW9uID09PSAwPyAwIDogOTApXHJcbiAgICAgIGhpdC5yb290LnRyYW5zZm9ybS5yb3RhdGlvbi56ID0gMFxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoaXMgd2lsbCBhZGQgYSBzbWFsbCBvZmZzZXQgZnJvbSB0aGUgd2FsbCBcclxuICAgIC8vIHNvIHRoYXQgaXQgd29uJ3Qgei1maWdodCBpdFxyXG4gICAgaGl0LnBvc2l0aW9uLnggPSBcclxuICAgICAgKHBvc2l0aW9uID09PSAwIHx8IHBvc2l0aW9uID09PSAyKVxyXG4gICAgICAgID8gYXhlLnBvc2l0aW9uLnggXHJcbiAgICAgICAgOiAoIFxyXG4gICAgICAgICAgICAocG9zaXRpb24gPT09IDEpXHJcbiAgICAgICAgICAgID8gY29ycmlkb3IuaGFsZldpZHRoIC0gMSBcclxuICAgICAgICAgICAgOiAoLWNvcnJpZG9yLmhhbGZXaWR0aCkgKyAxXHJcbiAgICAgICAgICApXHJcblxyXG4gICAgaGl0LnBvc2l0aW9uLnkgPSBcclxuICAgICAgcG9zaXRpb24gIT09IDA/IGF4ZS5wb3NpdGlvbi55IDogKC1nYW1lLnNjZW5lLmNvcnJpZG9yRWxldmF0aW9uKVxyXG5cclxuICAgIGhpdC5wb3NpdGlvbi56ID0gYXhlLnBvc2l0aW9uLnpcclxuXHJcbiAgICBoaXQuc2V0VmlzaWJsZSh0cnVlKVxyXG4gICAgaGl0LnNldE9wYWNpdHkoMC42NSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dDaGFySGl0RWZmZWN0KCkge1xyXG4gICAgY2hhckhpdC5hY3RpdmUgPSB0cnVlXHJcbiAgICBjaGFySGl0LnNldFZpc2libGUodHJ1ZSlcclxuICAgIGNoYXJIaXQuc2V0T3BhY2l0eSgwLjgpXHJcbiAgICBjaGFySGl0LnBvc2l0aW9uLmNvcHkoYXhlLnBvc2l0aW9uKVxyXG4gIH1cclxuXHJcbiAgbGV0IGF4ZVRvQ2FtID0gMFxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUF4ZShkdCkge1xyXG4gICAgaWYgKGdhbWUucGF1c2VkKSByZXR1cm5cclxuICAgIGxldCBkYW1wID0gTWF0aC5wb3coYXhlLmRhbXBpbmcsIGR0KVxyXG5cclxuICAgIGF4ZS52ZWxvY2l0eS54ICo9IGRhbXBcclxuICAgIGF4ZS52ZWxvY2l0eS56ICo9IGRhbXBcclxuXHJcbiAgICBsZXQgYXhlVmVsb2NpdHlMZW5ndGggPSBcclxuICAgICAgbWF0aHMuY2xhbXAoTWF0aC5hYnMoYXhlLnZlbG9jaXR5Lmxlbmd0aCgpKSwgMCwgODAwKVxyXG5cclxuICAgIGF4ZS5yb3RhdGlvbi56ICs9IFxyXG4gICAgICAoIWdhbWUucGh5c2ljcy53aW5kP01hdGguc2lnbihheGUudmVsb2NpdHkueCk6MSkgXHJcbiAgICAgICogKE1hdGguYWJzKGF4ZVZlbG9jaXR5TGVuZ3RoKnRocm93SW5mby5mb3JjZSowLjAwMjMpICogZHQpXHJcblxyXG4gICAgaWYgKGF4ZS5yb3RhdGlvbi56ID4gMzU5KSB7XHJcbiAgICAgIGF4ZS5yb3RhdGlvbi56ID0gMFxyXG4gICAgfSBlbHNlIGlmIChheGUucm90YXRpb24ueiA8IDEpIHtcclxuICAgICAgYXhlLnJvdGF0aW9uLnogPSAzNTlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXhlVmVsb2NpdHlMZW5ndGggPiA1MDApIHtcclxuICAgICAgYXhlVG9DYW0gPSBcclxuICAgICAgICAoTWF0aC5hYnMoYXhlLnBvc2l0aW9uLnotKChnYW1lLnNjZW5lLmNoYXJhY3RlclNlcGFyYXRpb24vMikgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGNhbVNpZGUpKSkqMC4wMDFcclxuICAgICAgcGxheVNvdW5kKFxyXG4gICAgICAgICAgJ2F4ZVRocm93JyxcclxuICAgICAgICAgIDEgLSBtYXRocy5jbGFtcChheGVUb0NhbSwgMCwgMSksXHJcbiAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgODAwLShheGVWZWxvY2l0eUxlbmd0aCowLjg2KVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgYXhlLnZlbG9jaXR5LnkgKz0gKGF4ZS5tYXNzICogZ2FtZS5waHlzaWNzLmdyYXZpdHkpICogZHRcclxuXHJcbiAgICAvLyBNYWluIHBvc2l0aW9uIHVwZGF0ZS5cclxuICAgIGF4ZS52ZWxvY2l0eS54ICs9IChnYW1lLnBoeXNpY3Mud2luZD80MDAuMDowLjApICogZHRcclxuXHJcbiAgICBheGUucG9zaXRpb24ueCArPSBheGUudmVsb2NpdHkueCAqIGR0XHJcbiAgICBheGUucG9zaXRpb24ueSArPSBheGUudmVsb2NpdHkueSAqIGR0XHJcbiAgICBheGUucG9zaXRpb24ueiArPSBheGUudmVsb2NpdHkueiAqIGR0XHJcblxyXG4gICAgYXhlLnNjYWxlLnggPSBjYW1TaWRlXHJcblxyXG4gICAgY2hlY2tBeGVDb2xsaXNpb25zKGR0KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tBeGVDb2xsaXNpb25zKGR0KSB7XHJcbiAgICBsZXQgYXhlVG9wID0gYXhlLmdldEJvdW5kc1RvcCgpXHJcbiAgICBsZXQgYXhlQm90dG9tID0gYXhlLmdldEJvdW5kc0JvdHRvbSgpXHJcblxyXG4gICAgbGV0IGF4ZUZyb250ID0gYXhlLmdldEJvdW5kc0Zyb250KClcclxuICAgIGxldCBheGVCYWNrID0gYXhlLmdldEJvdW5kc0JhY2soKVxyXG5cclxuICAgIGxldCBheGVSaWdodCA9IGF4ZS5nZXRCb3VuZHNSaWdodCgpXHJcbiAgICBsZXQgYXhlTGVmdCA9IGF4ZS5nZXRCb3VuZHNMZWZ0KClcclxuXHJcbiAgICBsZXQgZmxvb3IgPSAtZ2FtZS5zY2VuZS5jb3JyaWRvckVsZXZhdGlvbiAtIDFcclxuICAgIGxldCBoYXNUb3VjaGVkRmxvb3IgPSBheGVCb3R0b20gPj0gZmxvb3JcclxuXHJcbiAgICAvLyBob3cgZmFyIHdpbGwgdGhlIGF4ZSBmbHkgdW50aWwgaXQgZ2V0cyBwb29sZWQuXHJcbiAgICBsZXQga2lsbERpc3RhbmNlID0gY29ycmlkb3IubGVuZ3RoICogMC40IFxyXG5cclxuICAgIGxldCBoaXRTaWRlID0gMHhmZiAvLyB3aGF0IHNpZGUgZGlkIGl0IG92ZXJsYXBcclxuICAgIGxldCBheGVWZWxvY2l0eUxlbmd0aCA9IFxyXG4gICAgICBtYXRocy5jbGFtcChNYXRoLmFicyhheGUudmVsb2NpdHkubGVuZ3RoKCkpLCAwLCA4MDApXHJcblxyXG4gICAgaWYgKGF4ZVJpZ2h0ID49IGNvcnJpZG9yLmhhbGZXaWR0aCkge1xyXG4gICAgICAvLyBUaGlzIHBvc2l0aW9uLnggLT0gMSBkb2Vzbid0IHNlZW0gbXVjaCwgYnV0IGl0IHdpbGwgcHJldmVudCB0aGUgYXhlXHJcbiAgICAgIC8vIG9mIGdldHRpbmcgc3R1Y2sgb24gdGhlIHdhbGxcclxuICAgICAgYXhlLnBvc2l0aW9uLnggLT0gMVxyXG4gICAgICBheGUudmVsb2NpdHkueiAqPSAwLjk1XHJcbiAgICAgIGF4ZS52ZWxvY2l0eS54ICo9IC0xXHJcbiAgICAgIGhpdFNpZGUgPSAxXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGF4ZUxlZnQgPD0gLWNvcnJpZG9yLmhhbGZXaWR0aCkge1xyXG4gICAgICBheGUucG9zaXRpb24ueCArPSAxXHJcbiAgICAgIGF4ZS52ZWxvY2l0eS56ICo9IDAuOTVcclxuICAgICAgYXhlLnZlbG9jaXR5LnggKj0gLTFcclxuICAgICAgaGl0U2lkZSA9IC0xXHJcbiAgICB9XHJcblxyXG4gICAgLy8gSXQgc2VlbXMgdGhhdCB0aGUgY29ycmlkb3IgdG9wIGlzIGFjdHVhbGwgLTYwMC4uLiBcclxuICAgIC8vIGJldHRlciBjaGFuZ2UgdGhhdCBzb29uIVxyXG4gICAgaWYgKGF4ZVRvcCA8IC02MDApIHtcclxuICAgICAgYXhlLnBvc2l0aW9uLnkgKz0gMVxyXG4gICAgICBheGUudmVsb2NpdHkueSAqPSAtMVxyXG4gICAgICBoaXRTaWRlID0gMlxyXG4gICAgfVxyXG5cclxuICAgIGlmIChoYXNUb3VjaGVkRmxvb3IpIHtcclxuICAgICAgYXhlLnBvc2l0aW9uLnkgPSBmbG9vci1heGUuZ2V0Qm91bmRzRGVwdGgoKVxyXG4gICAgICBheGUudmVsb2NpdHkueSAqPSAtYXhlLmJvdW5jaW5lc3NcclxuICAgICAgaGl0U2lkZSA9IDBcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGl0U2lkZSAhPT0gMHhmZiAmJiBheGVWZWxvY2l0eUxlbmd0aCA+PSA0MDApIHtcclxuICAgICAgcGxheVNvdW5kKFxyXG4gICAgICAgIGdhbWUuc291bmRzLmhpdEZsb29yWyhNYXRoLnJhbmRvbSgpKjQpfDBdLFxyXG4gICAgICAgIDEgLSBNYXRoLmFicyhheGVUb0NhbSArIGF4ZVZlbG9jaXR5TGVuZ3RoICogMC4wMDAwMiksXHJcbiAgICAgICAgdHJ1ZVxyXG4gICAgICApXHJcblxyXG4gICAgICBzaG93QXhlSGl0RWZmZWN0KGhpdFNpZGUpXHJcbiAgICAgIGhpdFNpZGUgPSAweGZmXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGF4ZS5wb3NpdGlvbi56ID4ga2lsbERpc3RhbmNlIHx8IGF4ZS5wb3NpdGlvbi56IDwgLWtpbGxEaXN0YW5jZSkge1xyXG4gICAgICBpZiAoYXhlLmFjdGl2ZSkge1xyXG4gICAgICAgIGtpbGxBeGUoKVxyXG4gICAgICAgIGlzQWltaW5nID0gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGF4ZVZlbG9jaXR5TGVuZ3RoIDw9IDI1MCkge1xyXG4gICAgICBheGUubWVzaC5zdHlsZS5vcGFjaXR5IC09IDIgKiBkdFxyXG5cclxuICAgICAgaWYgKGF4ZS5tZXNoLnN0eWxlLm9wYWNpdHkgPD0gMCkge1xyXG4gICAgICAgIGtpbGxBeGUoKVxyXG4gICAgICAgIGlzQWltaW5nPXRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24ga2lsbEF4ZSgpIHtcclxuICAgIGF4ZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgYXhlLnNldFZpc2libGUoZmFsc2UpXHJcblxyXG4gICAgYXhlLnBvc2l0aW9uLnNldCgpXHJcbiAgICBheGUudmVsb2NpdHkuc2V0KClcclxuXHJcbiAgICBpbXBhY3RNYXJrZXIuc2V0T3BhY2l0eSgwKVxyXG4gICAgc2hhZG93QmxvYi5zZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgaGl0LnNldFZpc2libGUoZmFsc2UpXHJcbiAgICBoaXQuc2V0T3BhY2l0eSgwKVxyXG5cclxuICAgIGlzQWNjdW11bGF0aW5nRm9yY2UgPSBmYWxzZVxyXG5cclxuICAgIHRocm93SW5mby5vcmlnaW4uc2V0KClcclxuICAgIHRocm93SW5mby5mb3JjZSA9IDBcclxuICAgIHRocm93SW5mby5pbXBhY3RQb3NpdGlvbi5zZXQoKVxyXG5cclxuICAgIC8vVEVTVElOR1xyXG4gICAgLy9pZiAoZ2FtZS5tb2RlID09PSBHQU1FX01PREVfU0lOR0xFKSB7XHJcbiAgICAgIC8vaWYgKHJlZC5hY3RpdmUpIHtcclxuICAgICAgICAvL3N3aXRjaFR1cm5zKClcclxuICAgICAgLy99XHJcbiAgICAvL30gZWxzZSB7XHJcbiAgICAgIC8vc3dpdGNoVHVybnMoKVxyXG4gICAgLy99XHJcbiAgICBzd2l0Y2hUdXJucygpXHJcbiAgfVxyXG5cclxuXHJcbiAgLy9cclxuICAvLyBBeGUvQ2hhcmFjdGVyIGNvbGxpc2lvbiBkZXRlY3Rpb25cclxuICAvL1xyXG5cclxuICBmdW5jdGlvbiBjb2xsaWRlZFdpdGhBeGUoY2hhcikge1xyXG4gICAgaWYgKGF4ZS5wb3NpdGlvbi56ID49IGNoYXIuZ2V0Qm91bmRzRnJvbnQoKSAmJlxyXG4gICAgICBheGUucG9zaXRpb24ueiA8PSBjaGFyLmdldEJvdW5kc0JhY2soKSAmJlxyXG4gICAgICBheGUucG9zaXRpb24ueCA+PSBjaGFyLmdldEJvdW5kc0xlZnQoKSAmJlxyXG4gICAgICBheGUucG9zaXRpb24ueCA8PSBjaGFyLmdldEJvdW5kc1JpZ2h0KCkgJiZcclxuICAgICAgYXhlLnBvc2l0aW9uLnkgPj0gY2hhci5nZXRCb3VuZHNUb3AoKSlcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG5cclxuICAvL1xyXG4gIC8vIEFycm93L2FpbWluZy5cclxuICAvL1xyXG5cclxuICBmdW5jdGlvbiBhZGp1c3RBcnJvd0RpcmVjdGlvbihiYXNlLCBhbmltRGlyZWN0aW9uKSB7XHJcbiAgICBhcnJvdy5yb3RhdGlvbi55ID0gYmFzZVxyXG4gICAgYXJyb3cuYW5pbURpciA9IGJsdWUucG9zaXRpb24ueCA+PSByZWQucG9zaXRpb24ueD8gMSA6IC0xXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRBcnJvd0FpbWluZ1NpZGUoKSB7XHJcbiAgICBsZXQgdGhldGEgPSBhcnJvdy5yb3RhdGlvbi55XHJcbiAgICByZXR1cm4gKHRoZXRhIDw9IDAgJiYgdGhldGEgPj0gLTE4MCkgPyAxIDogLTFcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFuaW1hdGVBcnJvdyhkdCkge1xyXG4gICAgbGV0IGFycm93WSA9IC1nYW1lLnNjZW5lLmNvcnJpZG9yRWxldmF0aW9uLTFcclxuXHJcbiAgICBpZiAoZ2FtZS50dXJuID09PSBHQU1FX1RVUk5fQkxVRSkge1xyXG4gICAgICBsZXQgYXJyb3daID0gYmx1ZS5wb3NpdGlvbi56IC0gKGJsdWUuYm91bmRzLnogKiAwLjUpXHJcblxyXG4gICAgICBhcnJvdy5wb3NpdGlvbi5zZXQoYmx1ZS5wb3NpdGlvbi54LCBhcnJvd1ksIGFycm93WilcclxuXHJcbiAgICAgIGlmIChhcnJvdy5yb3RhdGlvbi55ID4gZ2FtZS5hcnJvd0FpbS5tYXhBbmdsZSB8fFxyXG4gICAgICAgIGFycm93LnJvdGF0aW9uLnkgPD0gLWdhbWUuYXJyb3dBaW0ubWF4QW5nbGUpIHtcclxuICAgICAgICBhcnJvdy5hbmltRGlyICo9IC0xXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBhcnJvd1ogPSByZWQucG9zaXRpb24ueiArIChyZWQuYm91bmRzLnogKiAwLjUpXHJcblxyXG4gICAgICBhcnJvdy5wb3NpdGlvbi5zZXQocmVkLnBvc2l0aW9uLngsIGFycm93WSwgYXJyb3daKVxyXG5cclxuICAgICAgaWYgKGFycm93LnJvdGF0aW9uLnkgPiAtMTgwICsgZ2FtZS5hcnJvd0FpbS5tYXhBbmdsZSB8fFxyXG4gICAgICAgIGFycm93LnJvdGF0aW9uLnkgPD0gLTE4MCAtIGdhbWUuYXJyb3dBaW0ubWF4QW5nbGUpIHtcclxuICAgICAgICBhcnJvdy5hbmltRGlyICo9IC0xXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcnJvdy5yb3RhdGlvbi55ICs9IGFycm93LmFuaW1TcGVlZCAqIGFycm93LmFuaW1EaXIgKiBkdFxyXG4gICAgYXJyb3cuZGlyZWN0aW9uID0gLTkwIC0gYXJyb3cucm90YXRpb24ueVxyXG4gICAgYXJyb3cudXBkYXRlKClcclxuICB9XHJcblxyXG5cclxuICAvL1xyXG4gIC8vIEdlbmVyYWwuXHJcbiAgLy9cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlRW50aXRpZXMoKSB7XHJcbiAgICBheGUudXBkYXRlKClcclxuXHJcbiAgICBibHVlLnVwZGF0ZSgpXHJcbiAgICByZWQudXBkYXRlKClcclxuXHJcbiAgICBibHVlU2hhZG93QmxvYi51cGRhdGUoKVxyXG4gICAgcmVkU2hhZG93QmxvYi51cGRhdGUoKVxyXG5cclxuICAgIGltcGFjdE1hcmtlci51cGRhdGUoKVxyXG4gICAgc2hhZG93QmxvYi51cGRhdGUoKVxyXG5cclxuICAgIGhpdC51cGRhdGUoKVxyXG4gICAgY2hhckhpdC51cGRhdGUoKVxyXG4gIH1cclxuXHJcbiAgLy9cclxuICAvLyBTb3VuZCBhbmQgbXVzaWMuXHJcbiAgLy9cclxuXHJcbiAgbGV0IHBsYXlMb2NrUXVldWUgPSBbXVxyXG4gIGxldCBhdWRpb1RpbWVyID0gbnVsbFxyXG4gIGZ1bmN0aW9uIHBsYXlTb3VuZChuYW1lLCB2b2x1bWUsIHJpZ2h0YXdheSwgaW50ZXJ2YWwsIGRlbGF5KSB7XHJcbiAgICB2b2x1bWUgPSB2b2x1bWUgfHwgMFxyXG4gICAgcmlnaHRhd2F5ID0gcmlnaHRhd2F5IHx8IGZhbHNlXHJcbiAgICBpbnRlcnZhbCA9IGludGVydmFsIHx8IDBcclxuXHJcbiAgICBsZXQgc291bmQgPSBnYW1lLnNvdW5kc1tuYW1lXVxyXG4gICAgc291bmQudm9sdW1lID0gbWF0aHMuY2xhbXAodm9sdW1lLCAwLCAxKVxyXG5cclxuICAgIGxldCBpc0F1ZGlvTG9ja2VkID0gcGxheUxvY2tRdWV1ZS5pbmRleE9mKG5hbWUpICE9PSAtMVxyXG5cclxuICAgIGlmIChpbnRlcnZhbCA+IDAgJiYgIWlzQXVkaW9Mb2NrZWQpIHtcclxuICAgICAgcGxheUxvY2tRdWV1ZS5wdXNoKG5hbWUpXHJcbiAgICAgIGF1ZGlvVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcGxheUxvY2tRdWV1ZS5zcGxpY2UocGxheUxvY2tRdWV1ZS5pbmRleE9mKG5hbWUpLCAxKVxyXG4gICAgICB9LCBpbnRlcnZhbClcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWlzQXVkaW9Mb2NrZWQpIHtcclxuICAgICAgaWYgKHJpZ2h0YXdheSkge1xyXG4gICAgICAgIHNvdW5kLmN1cnJlbnRUaW1lID0gMFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChkZWxheSAhPSBudWxsKSB7XHJcbiAgICAgICAgYXVkaW9UaW1lciA9IHNldFRpbW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHNvdW5kLnBsYXkoKVxyXG4gICAgICAgIH0sIGRlbGF5KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNvdW5kLnBsYXkoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy9cclxuICAvLyBDYW1lcmEuXHJcbiAgLy9cclxuXHJcbiAgZnVuY3Rpb24gc3BpbkNhbWVyYShkdCkge1xyXG4gICAgaWYgKGdhbWUudmlldy5lbmFibGVBaW1Gb2N1cykge1xyXG4gICAgICBjYW1lcmEudHJhbnNmb3JtLnJvdGF0aW9uLnkgPSBtYXRocy5sZXJwKFxyXG4gICAgICAgIGNhbWVyYS50cmFuc2Zvcm0ucm90YXRpb24ueSxcclxuICAgICAgICBnYW1lLnZpZXcucGl0Y2gsXHJcbiAgICAgICAgZ2FtZS52aWV3LmZvY3VzQW5pbVNwZWVkICogZHRcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IHpvb20gPSBnYW1lLnZpZXcuem9vbVxyXG4gIGxldCBjYW1lcmFZID0gY2FtZXJhLnRyYW5zZm9ybS5wb3NpdGlvbi55XHJcbiAgZnVuY3Rpb24gdXBkYXRlQ2FtZXJhKGR0KSB7XHJcbiAgICBpZiAoIWdhbWUuZGVidWdDYW1lcmEpIHtcclxuICAgICAgaWYgKGdhbWUudmlldy5lbmFibGVBaW1Gb2N1cykge1xyXG4gICAgICAgIGlmIChnYW1lLnR1cm4gPT09IEdBTUVfVFVSTl9CTFVFIFxyXG4gICAgICAgICAgJiYgY2FtZXJhLnRyYW5zZm9ybS5yb3RhdGlvbi55ID4gMCkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2FtZXJhLnRyYW5zZm9ybS5yb3RhdGlvbi55ID0gbWF0aHMuZmFzdExlcnAoXHJcbiAgICAgICAgICAgIGNhbWVyYS50cmFuc2Zvcm0ucm90YXRpb24ueSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgZ2FtZS52aWV3LmZvY3VzQW5pbVNwZWVkICogZHRcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChnYW1lLnR1cm4gPT09IEdBTUVfVFVSTl9SRUQgXHJcbiAgICAgICAgICAmJiBjYW1lcmEudHJhbnNmb3JtLnJvdGF0aW9uLnkgPCAxODApIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNhbWVyYS50cmFuc2Zvcm0ucm90YXRpb24ueSA9IG1hdGhzLmZhc3RMZXJwKFxyXG4gICAgICAgICAgICBjYW1lcmEudHJhbnNmb3JtLnJvdGF0aW9uLnksXHJcbiAgICAgICAgICAgIDE4MCxcclxuICAgICAgICAgICAgZ2FtZS52aWV3LmZvY3VzQW5pbVNwZWVkICogZHRcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzaGFrZUNhbWVyYSkge1xyXG4gICAgICAgIGNhbWVyYS50cmFuc2Zvcm0ucG9zaXRpb24ueCA9IChNYXRoLnJhbmRvbSgpLTAuNSkqODBcclxuICAgICAgICBjYW1lcmEudHJhbnNmb3JtLnBvc2l0aW9uLnkgPSAoTWF0aC5yYW5kb20oKS0wLjUpKi01MFxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGNhbWVyYS50cmFuc2Zvcm0ucG9zaXRpb24ueCA9IDBcclxuICAgICAgICAgIGNhbWVyYS50cmFuc2Zvcm0ucG9zaXRpb24ueSA9IDBcclxuICAgICAgICAgIHNoYWtlQ2FtZXJhID0gZmFsc2VcclxuICAgICAgICB9LCAxMDApXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTb21lIGNvbnRyb2xzIHRoYXQgYXJlIHNvbWV3aGF0IHVzZWZ1bCBmb3IgZGVidWdnaW5nLlxyXG4gICAgaWYgKGdhbWUuZGVidWdDYW1lcmEpIHtcclxuICAgICAgaWYgKGlucHV0LmdldEtleShpbnB1dC5rZXlzLmQpKSB7XHJcbiAgICAgICAgY2FtZXJhLmFwcGx5Um90YXRpb24oMCwgZ2FtZS52aWV3LnR1cm5TcGVlZCAqIC1kdCwgMClcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGlucHV0LmdldEtleShpbnB1dC5rZXlzLmEpKSB7XHJcbiAgICAgICAgY2FtZXJhLmFwcGx5Um90YXRpb24oMCwgZ2FtZS52aWV3LnR1cm5TcGVlZCAqIGR0LCAwKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaW5wdXQuZ2V0S2V5KGlucHV0LmtleXMudykpIHtcclxuICAgICAgICBjYW1lcmEuYXBwbHlSb3RhdGlvbihnYW1lLnZpZXcudHVyblNwZWVkICogLWR0LCAwLCAwKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaW5wdXQuZ2V0S2V5KGlucHV0LmtleXMucykpIHtcclxuICAgICAgICBjYW1lcmEuYXBwbHlSb3RhdGlvbihnYW1lLnZpZXcudHVyblNwZWVkICogZHQsIDAsIDApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpbnB1dC5nZXRLZXkoaW5wdXQua2V5cy5vbmUpKSB7XHJcbiAgICAgICAgem9vbSAtPSAwLjYgKiBkdFxyXG4gICAgICAgIGNhbWVyYS56b29tKHpvb20pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpbnB1dC5nZXRLZXkoaW5wdXQua2V5cy50d28pKSB7XHJcbiAgICAgICAgem9vbSArPSAwLjYgKiBkdFxyXG4gICAgICAgIGNhbWVyYS56b29tKHpvb20pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpbnB1dC5nZXRLZXkoaW5wdXQua2V5cy5mb3VyKSkge1xyXG4gICAgICAgIGNhbWVyYS5zZXRQZXJzcGVjdGl2ZShnYW1lLnZpZXcucGVyc3BlY3RpdmUpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpbnB1dC5nZXRLZXkoaW5wdXQua2V5cy5maXZlKSkge1xyXG4gICAgICAgIGNhbWVyYS5zZXRQZXJzcGVjdGl2ZSg5OTk5KVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBSZXNldCB2aWV3XHJcbiAgICAgIGlmIChpbnB1dC5nZXRLZXkoaW5wdXQua2V5cy50aHJlZSkpIHtcclxuICAgICAgICBjYW1lcmEuc2V0Um90YXRpb24oY2FtZXJhLnRyYW5zZm9ybS5yb3RhdGlvbi54LCAwLCAwKVxyXG4gICAgICAgIGNhbWVyYS5zZXRQZXJzcGVjdGl2ZShnYW1lLnZpZXcucGVyc3BlY3RpdmUpXHJcbiAgICAgICAgem9vbSA9IGdhbWUudmlldy56b29tXHJcbiAgICAgICAgY2FtZXJhLnpvb20oem9vbSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2FtZS5maW5pc2ggPSBmdW5jdGlvbigpIHtcclxuICAgIC8qIERlc3Ryb3kgZXZlcnl0aGluZyBoZXJlISAqL1xyXG4gICAgdGhyb3dJbmZvLmFjY3VtdWxhdGVkRm9yY2UgPSAwXHJcbiAgICB0aHJvd0luZm8ub3JpZ2luLnNldCgpXHJcbiAgICB0aHJvd0luZm8uYW5nbGUgPSAwXHJcbiAgICB0aHJvd0luZm8uYWNjdW11bGF0ZXBkRm9yY2UgPSAwXHJcbiAgICB0aHJvd0luZm8uZm9yY2UgPSAwXHJcbiAgICB0aHJvd0luZm8uaW1wYWN0UG9zaXRpb24uc2V0KClcclxuXHJcbiAgICBjYW5TaG9vdCA9IGZhbHNlXHJcbiAgICBpc0FJV2FpdGluZyA9IGZhbHNlXHJcblxyXG4gICAgc2NyZWVuRmxhc2guc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcblxyXG4gICAgZ2FtZS5wYXVzZWQgPSBmYWxzZVxyXG5cclxuICAgIHdvcmxkLmRlc3Ryb3koKVxyXG4gICAgZ3VpLmRlc3Ryb3koKVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBnYW1lXHJcbn0oXHJcbiAgd2luZG93LnV0b3B5Lm1hdGhzLFxyXG4gIHdpbmRvdy51dG9weS5hc3NldHMsXHJcbiAgd2luZG93LnV0b3B5LnNoYXJlZCxcclxuICB3aW5kb3cudXRvcHkudXRpbHMsXHJcbiAgd2luZG93LnV0b3B5LmlucHV0LFxyXG4gIHdpbmRvdy51dG9weS5ncmFwaGljcyxcclxuICB3aW5kb3cudXRvcHkud29ybGQsXHJcbiAgd2luZG93LnV0b3B5LmNhbWVyYSxcclxuICB3aW5kb3cudXRvcHkub2JqZWN0cyxcclxuICB3aW5kb3cudXRvcHkuZ3VpLFxyXG4gIHdpbmRvdy51dG9weS50aW1lclxyXG4pKVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgc2hhcmVkID0ge1xyXG4gIGNvbG9yczoge1xyXG4gICAgdHJhbnNwYXJlbnQ6ICdyZ2JhKDAsIDAsIDAsIDApJyxcclxuICAgIGJhY2tncm91bmQ6ICcjMTIwMTIwJywgXHJcbiAgICBcclxuICAgIHBsYXllcjogJyMwZWM3ZmYnLFxyXG4gICAgZW5lbXk6ICcjRjExRDlDJyxcclxuICAgIFxyXG4gICAgYmx1ZTogJyMwZWM3ZmYnLFxyXG4gICAgcmVkOiAnI0YxMUQ5QycsXHJcbiAgICBidWxsZXQ6ICcjNEQ0RDREJyxcclxuICAgIHBsYXRmb3JtOiAnI2YwZjBmMCdcclxuICB9LFxyXG4gIFxyXG4gIC8vIHNpbmdsZSBvciBtdWx0aVxyXG4gIHNlbGVjdGVkR2FtZU1vZGU6ICdzaW5nbGUnLFxyXG4gIC8vc2VsZWN0ZWRHYW1lTW9kZTogJ211bHRpJyxcclxuICBcclxuICBzZWxlY3RlZENoYXIxOiAnZ3VhcmQxJyxcclxuICBzZWxlY3RlZENoYXIyOiAnZ29ibGluMScsXHJcbiAgc2VsZWN0ZWRDb3JyaWRvcjogJ2NvcnJpZG9ySHVtYW5zJyxcclxuICBcclxuICBnYW1lU2NvcmU6IDMsXHJcbiAgaGlTY29yZTogMCxcclxuICBcclxuICBibHVlQWN0aW9uS2V5OiAzMixcclxuICByZWRBY3Rpb25LZXk6IDMyLFxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNoYXJlZFxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBsID0gY29uc29sZS5sb2dcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKHV0b3B5LCBpbnB1dCwgZ3JhcGhpY3MsIGFzc2V0cywgd29ybGQsIG9iamVjdHMsIGNhbWVyYSwgbWF0aHMsIHNoYXJlZCwgZ3VpKSBcclxue1xyXG4gIGNvbnN0IGNoYXJzZWxlY3QgPSB7fTtcclxuICBcclxuICBjaGFyc2VsZWN0Lm1lc2hlcyA9IHtcclxuICAgIGNoYXJGcmFtZTE6IGdyYXBoaWNzLmNyZWF0ZUZhY2UoMjU2LCAyNTYsIGFzc2V0cy50ZXh0dXJlcy5jaGFyRnJhbWUpLFxyXG4gICAgY2hhclNlbDE6IGdyYXBoaWNzLmNyZWF0ZUZhY2UoOTYsIDk2LCBhc3NldHMudGV4dHVyZXMucGxhY2Vob2xkZXJDaGFyKSxcclxuICAgIGJ0bkFycm93OiBncmFwaGljcy5jcmVhdGVGYWNlKDgwLCA4MCwgYXNzZXRzLnRleHR1cmVzLmJ0bkFycm93KSxcclxuICAgIGJ0bkZvcndhcmQ6IGdyYXBoaWNzLmNyZWF0ZUZhY2UoODAsIDgwLCBhc3NldHMudGV4dHVyZXMuYnRuRm9yd2FyZCksXHJcbiAgICBidG5CYWNrOiBncmFwaGljcy5jcmVhdGVGYWNlKDgwLCA4MCwgYXNzZXRzLnRleHR1cmVzLmJ0bkJhY2spLFxyXG4gICAgYmFja2dyb3VuZDogZ3JhcGhpY3MuY3JlYXRlRmFjZSgxMjgsIDEyOCwgYXNzZXRzLnRleHR1cmVzLm1lbnVCYWNrZ3JvdW5kKVxyXG4gIH07XHJcbiAgXHJcbiAgbGV0IGJnO1xyXG4gIGxldCBjaGFyT25lLCBzZWxDaGFyMVxyXG4gIGxldCBjaGFyRnJhbWUxLCBjaGFyRnJhbWUxTGVmdCwgY2hhckZyYW1lMVJpZ2h0XHJcbiAgXHJcbiAgbGV0IGJ0blBsYXksIGJ0bkJhY2ssIGMxXHJcbiAgICAgICAgICBcclxuICBjaGFyc2VsZWN0LmluaXQgPSBmdW5jdGlvbihpbml0KSB7XHJcbiAgICBjYW1lcmEuc2V0Um90YXRpb24oMCwgMCwgMCk7XHJcbiAgICBjYW1lcmEuc2V0UG9zaXRpb24oMCwgMCwgMCk7XHJcbiAgICBjYW1lcmEuem9vbSgxKTtcclxuICAgIFxyXG4gICAgZ3JhcGhpY3Muc2V0QmFja2dyb3VuZENvbG9yKCdibGFjaycpO1xyXG4gICAgXHJcbiAgICBiZyA9IG5ldyBvYmplY3RzLkdhbWVPYmplY3Qoe1xyXG4gICAgICBmYWNlczogY2hhcnNlbGVjdC5tZXNoZXMuYmFja2dyb3VuZCwgXHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygpLCBcclxuICAgICAgc2NhbGU6IG5ldyBtYXRocy5WZWN0b3IzKDYsIDgsIDApXHJcbiAgICB9KVxyXG4gICAgd29ybGQuYWRkKGJnKVxyXG4gICAgXHJcbiAgICBjaGFyRnJhbWUxID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBjaGFyc2VsZWN0Lm1lc2hlcy5jaGFyRnJhbWUxLFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoMCwgMCwgMSksXHJcbiAgICAgIHJvdGF0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygwLCAwLCAtNSlcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNoYXJGcmFtZTFMZWZ0ID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBjaGFyc2VsZWN0Lm1lc2hlcy5idG5BcnJvdyxcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKC0xMTUsIDAsIDEwKSxcclxuICAgICAgcm90YXRpb246IG5ldyBtYXRocy5WZWN0b3IzKDAsIDAsIDApLFxyXG4gICAgICBzY2FsZTogbmV3IG1hdGhzLlZlY3RvcjMoLTEsIDEsIDEpXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjaGFyRnJhbWUxUmlnaHQgPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IGNoYXJzZWxlY3QubWVzaGVzLmJ0bkFycm93LFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoMTE1LCAwLCAxMCksXHJcbiAgICAgIHJvdGF0aW9uOiBuZXcgbWF0aHMuVmVjdG9yMygwLCAwLCAwKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgXHJcbiAgICBjaGFyRnJhbWUxTGVmdC5tZXNoLm9uY2xpY2sgPSBoYW5kbGVGcmFtZTFMZWZ0O1xyXG4gICAgY2hhckZyYW1lMVJpZ2h0Lm1lc2gub25jbGljayA9IGhhbmRsZUZyYW1lMVJpZ2h0O1xyXG4gICAgXHJcbiAgICBsZXQgYnV0dG9uc0xlZnQgPSBbXHJcbiAgICAgIGNoYXJGcmFtZTFMZWZ0XHJcbiAgICBdO1xyXG4gICAgXHJcbiAgICBidG5QbGF5ID0gbmV3IG9iamVjdHMuR2FtZU9iamVjdCh7XHJcbiAgICAgIGZhY2VzOiBjaGFyc2VsZWN0Lm1lc2hlcy5idG5Gb3J3YXJkLFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoMTg1LCAzMjAsIDEwKSxcclxuICAgICAgc2NhbGU6IG5ldyBtYXRocy5WZWN0b3IzKDEsIDEsIDEpIFxyXG4gICAgfSlcclxuICBcclxuICAgIGJ0blBsYXkubWVzaC5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgLy91dG9weS5zd2l0Y2hTdGF0ZSgnY29ycmlkb3JzZWxlY3Rpb25zdGF0ZScsIHsgbW9kZTogJ3NpbmdsZScgfSlcclxuICAgICAgLy91dG9weS5zd2l0Y2hTdGF0ZSgncGxheXN0YXRlJywgeyBtb2RlOiAnc2luZ2xlJyB9KVxyXG4gICAgICAvL3NoYXJlZC5zZWxlY3RlZEdhbWVNb2RlID0gJ3NpbmdsZSdcclxuICAgICAgdXRvcHkuc3dpdGNoU3RhdGUoJ3BsYXlzdGF0ZScpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJ0bkJhY2sgPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICBmYWNlczogY2hhcnNlbGVjdC5tZXNoZXMuYnRuQmFjayxcclxuICAgICAgcG9zaXRpb246IG5ldyBtYXRocy5WZWN0b3IzKC0xOTAsIDMyMCwgMTApLFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGJ0bkJhY2subWVzaC5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgdXRvcHkuc3dpdGNoU3RhdGUoJ21lbnVzdGF0ZScpIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgYnV0dG9uc1JpZ2h0ID0gW1xyXG4gICAgICBjaGFyRnJhbWUxUmlnaHQsXHJcbiAgICAgIGJ0blBsYXksXHJcbiAgICAgIGJ0bkJhY2tcclxuICAgIF07XHJcbiAgICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9uc0xlZnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYnV0dG9uc0xlZnRbaV0ubWVzaC5vbm1vdXNlZW50ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBidXR0b25zTGVmdFtpXS5zY2FsZS5zZXQoLTEuMywgMS4zLCAxLjMpO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgYnV0dG9uc0xlZnRbaV0ubWVzaC5vbm1vdXNlbGVhdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBidXR0b25zTGVmdFtpXS5zY2FsZS5zZXQoLTEsIDEsIDEpO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgYnV0dG9uc0xlZnRbaV0ubWVzaC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGJ1dHRvbnNMZWZ0W2ldLnNjYWxlLnNldCgtMSwgMSwgMSk7XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICBidXR0b25zTGVmdFtpXS5tZXNoLm9ubW91c2V1cCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGJ1dHRvbnNMZWZ0W2ldLnNjYWxlLnNldCgtMS4zLCAxLjMsIDEuMyk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9uc1JpZ2h0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGJ1dHRvbnNSaWdodFtpXS5tZXNoLm9ubW91c2VlbnRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGJ1dHRvbnNSaWdodFtpXS5zY2FsZS5zZXQoMS4zLCAxLjMsIDEuMyk7XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICBidXR0b25zUmlnaHRbaV0ubWVzaC5vbm1vdXNlbGVhdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBidXR0b25zUmlnaHRbaV0uc2NhbGUuc2V0KDEsIDEsIDEpO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgYnV0dG9uc1JpZ2h0W2ldLm1lc2gub25tb3VzZWRvd24gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBidXR0b25zUmlnaHRbaV0uc2NhbGUuc2V0KDEsIDEsIDEpO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgYnV0dG9uc1JpZ2h0W2ldLm1lc2gub25tb3VzZXVwID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYnV0dG9uc1JpZ2h0W2ldLnNjYWxlLnNldCgxLjMsIDEuMywgMS4zKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IGxhYmVsQ2hhclNlbGVjdCA9IGd1aS5jcmVhdGVMYWJlbCgnU2VsZWN0IHlvdXIgY2hhcmFjdGVyJylcclxuICAgIGxhYmVsQ2hhclNlbGVjdC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgyMDBweCkgdHJhbnNsYXRlWSgxMzBweCkgdHJhbnNsYXRlWigxMDBweCknXHJcbiAgICBsYWJlbENoYXJTZWxlY3Quc3R5bGUudG9wID0gJzAlJ1xyXG4gICAgbGFiZWxDaGFyU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3RleHQtc2NvcmUnKVxyXG4gICAgbGFiZWxDaGFyU2VsZWN0LnN0eWxlLndpZHRoID0gJzQwMHB4J1xyXG4gICAgbGFiZWxDaGFyU2VsZWN0LnN0eWxlLmZvbnRTaXplID0gJzMwcHgnXHJcbiAgICBcclxuICAgIHdvcmxkLmFkZChjaGFyRnJhbWUxKTtcclxuICAgIFxyXG4gICAgd29ybGQuYWRkKGNoYXJGcmFtZTFMZWZ0KTtcclxuICAgIHdvcmxkLmFkZChjaGFyRnJhbWUxUmlnaHQpO1xyXG4gIFxyXG4gICAgd29ybGQuYWRkKGJ0blBsYXkpXHJcbiAgICB3b3JsZC5hZGQoYnRuQmFjaylcclxuICAgIFxyXG4gICAgc2VsQ2hhcjEgPSBuZXcgb2JqZWN0cy5HYW1lT2JqZWN0KHtcclxuICAgICAgZmFjZXM6IGNoYXJzZWxlY3QubWVzaGVzLmNoYXJTZWwxLFxyXG4gICAgICBwb3NpdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoMCwgMCwgMTApLFxyXG4gICAgICByb3RhdGlvbjogbmV3IG1hdGhzLlZlY3RvcjMoMCwgMCwgMClcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICB3b3JsZC5hZGQoc2VsQ2hhcjEpO1xyXG4gICAgXHJcbiAgICBncmFwaGljcy5zZXRGYWNlVGV4dHVyZShzZWxDaGFyMS5tZXNoLmNoaWxkTm9kZXNbMF0sIGFzc2V0cy50ZXh0dXJlcy5ndWFyZDEpO1xyXG4gICAgXHJcbiAgICBjMT0wXHJcbiAgfTtcclxuICBcclxuICBsZXQgYW5nbGUgPSAwLjA7XHJcbiAgY2hhcnNlbGVjdC51cGRhdGUgPSBmdW5jdGlvbihkdCkge1xyXG4gICAgYW5nbGUgKz0gZHQ7XHJcbiAgICBcclxuICAgIGlmIChhbmdsZSA+PSAzNjApIGFuZ2xlIC09IDM2MDtcclxuICAgIFxyXG4gICAgY2hhckZyYW1lMUxlZnQudXBkYXRlKCk7XHJcbiAgICBjaGFyRnJhbWUxUmlnaHQudXBkYXRlKCk7XHJcbiAgICBidG5QbGF5LnVwZGF0ZSgpXHJcbiAgICBidG5CYWNrLnVwZGF0ZSgpXHJcbiAgfTtcclxuICBcclxuICBjb25zdCBjaGFycyA9IFtcclxuICAgICdndWFyZDEnLFxyXG4gICAgJ2d1YXJkMicsXHJcbiAgICAna2luZycsXHJcbiAgICAnZ29ibGluMScsXHJcbiAgICAnZ29ibGluMicsXHJcbiAgICAnZ29ibGluS2luZycsXHJcbiAgICAnYmFyYmFyaWFuMScsXHJcbiAgICAnYmFyYmFyaWFuMicsXHJcbiAgICAnYmFyYmFyaWFuS2luZycsXHJcbiAgICAnc2VjdXJpdHkxJyxcclxuICAgICdzZWN1cml0eTInLFxyXG4gICAgJ3ByZXNpZGVudCdcclxuICBdXHJcbiAgXHJcbiAgXHJcbiAgZnVuY3Rpb24gaGFuZGxlRnJhbWUxTGVmdCgpIHtcclxuICAgIGMxLS07XHJcbiAgICBpZiAoYzEgPCAwKSBjMSA9IDExXHJcbiAgICBncmFwaGljcy5zZXRGYWNlVGV4dHVyZShzZWxDaGFyMS5tZXNoLmNoaWxkTm9kZXNbMF0sIGFzc2V0cy50ZXh0dXJlc1tjaGFyc1tjMV1dKVxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBoYW5kbGVGcmFtZTFSaWdodCgpIHtcclxuICAgIGMxKys7XHJcbiAgICBpZiAoYzEgPiAxMSkgYzEgPSAwXHJcbiAgICBncmFwaGljcy5zZXRGYWNlVGV4dHVyZShzZWxDaGFyMS5tZXNoLmNoaWxkTm9kZXNbMF0sIGFzc2V0cy50ZXh0dXJlc1tjaGFyc1tjMV1dKVxyXG4gIH1cclxuICBcclxuICBjaGFyc2VsZWN0LmZpbmlzaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgd29ybGQuZGVzdHJveSgpXHJcbiAgICBzaGFyZWQuc2VsZWN0ZWRDaGFyMSA9IGNoYXJzW2MxXVxyXG4gICAgc2hhcmVkLnNlbGVjdGVkQ2hhcjIgPSBjaGFyc1soYzErMSsoKyhNYXRoLnJhbmRvbSgpKjQpfDApKSUoY2hhcnMubGVuZ3RoLTEpXVxyXG4gICAgc2hhcmVkLmdhbWVTY29yZSA9IDEwMDBcclxuICAgIGd1aS5kZXN0cm95KClcclxuICB9O1xyXG4gIFxyXG4gIHJldHVybiBjaGFyc2VsZWN0XHJcbn0oXHJcbiAgd2luZG93LnV0b3B5LCBcclxuICB3aW5kb3cudXRvcHkuaW5wdXQsIFxyXG4gIHdpbmRvdy51dG9weS5ncmFwaGljcyxcclxuICB3aW5kb3cudXRvcHkuYXNzZXRzLFxyXG4gIHdpbmRvdy51dG9weS53b3JsZCxcclxuICB3aW5kb3cudXRvcHkub2JqZWN0cyxcclxuICB3aW5kb3cudXRvcHkuY2FtZXJhLFxyXG4gIHdpbmRvdy51dG9weS5tYXRocyxcclxuICB3aW5kb3cudXRvcHkuc2hhcmVkLFxyXG4gIHdpbmRvdy51dG9weS5ndWlcclxuKSk7XHJcbiIsIlxyXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcclxuICBsZXQgdGltZXIgPSB7XHJcbiAgICB0aW1lcnM6IFtdXHJcbiAgfVxyXG4gIFxyXG4gIHRpbWVyLmNyZWF0ZSA9IChhKSA9PiB7XHJcbiAgICBsZXQgdCA9IHtcclxuICAgICAgZHVyYXRpb246IGEuZHVyYXRpb24gfHwgMS4wLFxyXG4gICAgICBjb3VudERvd246IGEuY291bnREb3duIHx8IGZhbHNlLFxyXG4gICAgICB0aW1lOiBhLmNvdW50RG93biB8fCBmYWxzZSA/IGEuZHVyYXRpb24gOiAwLCAvLyB0aGUgY29yZVxyXG4gICAgICBvbkNvbXBsZXRlZDogYS5vbkNvbXBsZXRlZCB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGlzQ29tcGxldGU6IGZhbHNlLFxyXG4gICAgICBpc1J1bm5pbmc6IGZhbHNlLFxyXG4gICAgICBvbmNlOiBhLm9uY2UgIT09IHVuZGVmaW5lZCA/IGEub25jZSA6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRpbWVyLnRpbWVycy5wdXNoKHQpXHJcbiAgICBcclxuICAgIHJldHVybiB0XHJcbiAgfVxyXG4gIFxyXG4gIHRpbWVyLnN0YXJ0ID0gdCA9PiB7XHJcbiAgICB0LmlzQ29tcGxldGUgPSBmYWxzZVxyXG4gICAgdC5pc1J1bm5pbmcgPSB0cnVlXHJcbiAgfVxyXG4gIFxyXG4gIHRpbWVyLnJlc2V0ID0gdCA9PiB7XHJcbiAgICBpZiAodC5jb3VudERvd24pIHtcclxuICAgICAgdC50aW1lID0gdC5kdXJhdGlvbiArIC41XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0LnRpbWUgPSAtLjVcclxuICAgIH1cclxuICAgIFxyXG4gICAgdC5pc0NvbXBsZXRlID0gZmFsc2VcclxuICAgIHQuaXNSdW5uaW5nID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgdGltZXIuc3RvcEFsbCA9ICgpID0+IHtcclxuICAgIGxldCBpID0gdGltZXIudGltZXJzLmxlbmd0aFxyXG4gICAgd2hpbGUoaS0tKSB7XHJcbiAgICAgIHRpbWVyLnRpbWVyc1tpXS5pc1J1bm5pbmcgPSBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICB0aW1lci5kZXN0cm95ID0gdCA9PiB7XHJcbiAgICB0aW1lci50aW1lcnMuc3BsaWNlKHRpbWVyLnRpbWVycy5pbmRleE9mKHQpLCAxKVxyXG4gIH1cclxuICBcclxuICB0aW1lci5kZXN0cm95QWxsID0gKCkgPT4ge1xyXG4gICAgbGV0IGkgPSB0aW1lci50aW1lcnMubGVuZ3RoXHJcbiAgICB3aGlsZShpLS0pIHtcclxuICAgICAgZGVsZXRlIHRpbWVyLnRpbWVyc1tpXSBcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgdGltZXIudXBkYXRlID0gZHQgPT4ge1xyXG4gICAgbGV0IGkgPSB0aW1lci50aW1lcnMubGVuZ3RoXHJcbiAgICB3aGlsZShpLS0pIHtcclxuICAgICAgbGV0IHQgPSB0aW1lci50aW1lcnNbaV1cclxuXHJcbiAgICAgIGlmICh0LmlzUnVubmluZyAmJiAhdC5pc0NvbXBsZXRlKSB7XHJcbiAgICAgICAgaWYgKHQuY291bnREb3duKSB7XHJcbiAgICAgICAgICB0LnRpbWUgLT0gZHRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdC50aW1lICs9IGR0XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAodC5jb3VudERvd24gPyBNYXRoLmNlaWwodC50aW1lLTAuNSkgPD0gMCA6IE1hdGguZmxvb3IodC50aW1lKzAuNSkgPj0gdC5kdXJhdGlvbikge1xyXG4gICAgICAgIGlmICh0Lm9uQ29tcGxldGVkICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICB0Lm9uQ29tcGxldGVkKClcclxuICAgICAgICBcclxuICAgICAgICB0LmlzUnVubmluZyA9IGZhbHNlXHJcbiAgICAgICAgdC5pc0NvbXBsZXRlID0gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9ICBcclxuICB9IFxyXG4gIFxyXG4gIHJldHVybiB0aW1lclxyXG59KCkpXHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgXHJcbiAgICBjb25zdCB1dGlscyA9IHt9O1xyXG4gICAgXHJcbiAgICB1dGlscy5oZXhUb1JHQiA9IGZ1bmN0aW9uKGhleCkge1xyXG4gICAgICAgIGhleCA9IGhleC5yZXBsYWNlKC9eIy8sICcnKTtcclxuICAgICAgICBsZXQgcnIsIGdnLCBiYjtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgICByciA9IHBhcnNlSW50KGhleFswXSwgMTYpO1xyXG4gICAgICAgICAgICBnZyA9IHBhcnNlSW50KGhleFsxXSwgMTYpO1xyXG4gICAgICAgICAgICBiYiA9IHBhcnNlSW50KGhleFsyXSwgMTYpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJyID0gcGFyc2VJbnQoaGV4LnNsaWNlKDAsIDIpLCAxNik7XHJcbiAgICAgICAgICAgIGdnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDIsIDQpLCAxNik7XHJcbiAgICAgICAgICAgIGJiID0gcGFyc2VJbnQoaGV4LnNsaWNlKDQsIDYpLCAxNik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHI6IHJyLCBcclxuICAgICAgICAgICAgZzogZ2csIFxyXG4gICAgICAgICAgICBiOiBiYlxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBsZXQgbnVtUGF0dGVybiA9IC9bMC05XSsvZztcclxuICAgIHV0aWxzLmNzc0NvbG9yVG9SR0JBID0gZnVuY3Rpb24oY29sb3IpIHtcclxuICAgICAgICBsZXQgcnIsIGdnLCBiYiwgYWE7XHJcbiAgICAgICAgaWYgKGNvbG9yLnN0YXJ0c1dpdGgoJ3JnYmEnKSkge1xyXG4gICAgICAgICAgICBsZXQgcmdiYSA9IGNvbG9yLm1hdGNoKG51bVBhdHRlcm4pO1xyXG4gICAgICAgICAgICByciA9IHJnYmFbMF0gfHwgMDtcclxuICAgICAgICAgICAgZ2cgPSByZ2JhWzFdIHx8IDA7XHJcbiAgICAgICAgICAgIGJiID0gcmdiYVsyXSB8fCAwO1xyXG4gICAgICAgICAgICBhYSA9IHJnYmFbM10gfHwgMTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNvbG9yLnN0YXJ0c1dpdGgoJ3JnYicpKSB7XHJcbiAgICAgICAgICAgIGxldCByZ2IgPSBjb2xvci5tYXRjaChudW1QYXR0ZXJuKTtcclxuICAgICAgICAgICAgcnIgPSByZ2JbMF0gfHwgMDtcclxuICAgICAgICAgICAgZ2cgPSByZ2JbMV0gfHwgMDtcclxuICAgICAgICAgICAgYmIgPSByZ2JbMl0gfHwgMDtcclxuICAgICAgICAgICAgYWEgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByOiBwYXJzZUludChyciksXHJcbiAgICAgICAgICAgIGc6IHBhcnNlSW50KGdnKSxcclxuICAgICAgICAgICAgYjogcGFyc2VJbnQoYmIpLFxyXG4gICAgICAgICAgICBhOiBwYXJzZUludChhYSlcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHV0aWxzO1xyXG4gICAgXHJcbn0oKSk7XHJcbiIsIid1c2Ugc3RyaWN0JyBcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xyXG4gIHdpbmRvdy51dG9weSA9IHt9XHJcbiAgY29uc3QgdXRvcHkgPSB3aW5kb3cudXRvcHlcclxuICBcclxuICB1dG9weS5tYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3V0b3B5JylcclxuICBcclxuICB1dG9weS5zaGFyZWQgPSByZXF1aXJlKCcuL3NoYXJlZC5qcycpXHJcbiAgdXRvcHkudGltZXIgPSByZXF1aXJlKCcuL3RpbWVyLmpzJylcclxuICB1dG9weS5tYXRocyA9IHJlcXVpcmUoJy4vbWF0aHMuanMnKVxyXG4gIHV0b3B5LnV0aWxzID0gcmVxdWlyZSgnLi91dGlscy5qcycpIFxyXG4gIHV0b3B5LmFzc2V0cyA9IHJlcXVpcmUoJy4vYXNzZXRzLmpzJykgXHJcbiAgdXRvcHkuZ3VpID0gcmVxdWlyZSgnLi9ndWkuanMnKVxyXG4gIHV0b3B5LmlucHV0ID0gcmVxdWlyZSgnLi9pbnB1dC5qcycpIFxyXG4gIHV0b3B5LmNhbWVyYSA9IHJlcXVpcmUoJy4vY2FtZXJhLmpzJykgXHJcbiAgdXRvcHkub2JqZWN0cyA9IHJlcXVpcmUoJy4vb2JqZWN0cy5qcycpIFxyXG4gIHV0b3B5LndvcmxkID0gcmVxdWlyZSgnLi93b3JsZC5qcycpIFxyXG4gIHV0b3B5LmdyYXBoaWNzID0gcmVxdWlyZSgnLi9ncmFwaGljcy5qcycpIFxyXG4gIFxyXG4gIC8qIE5leHQgdGltZSBJJ2xsIG1ha2UgTm9kZSByZXNwb25zaWJsZSBmb3IgdGhpcy4uLiAqL1xyXG4gIHV0b3B5LnN0YXRlcyA9IHtcclxuICAgIG1lbnVzdGF0ZTogcmVxdWlyZSgnLi9tZW51c3RhdGUuanMnKSxcclxuICAgIHBsYXlzdGF0ZTogcmVxdWlyZSgnLi9wbGF5c3RhdGUuanMnKSxcclxuICAgIHNpbmdsZWNoYXJzZWxlY3RzdGF0ZTogcmVxdWlyZSgnLi9zaW5nbGVjaGFyc2VsZWN0c3RhdGUuanMnKSxcclxuICAgIGNoYXJzZWxlY3RzdGF0ZTogcmVxdWlyZSgnLi9jaGFyc2VsZWN0c3RhdGUuanMnKSxcclxuICAgIGNvcnJpZG9yc2VsZWN0aW9uc3RhdGU6IHJlcXVpcmUoJy4vY29ycmlkb3JzZWxlY3Rpb25zdGF0ZS5qcycpXHJcbiAgfVxyXG4gIFxyXG4gIC8vIFNldCBpbml0aWFsIHN0YXRlXHJcbiAgLy91dG9weS5jdXJyZW50U3RhdGUgPSB1dG9weS5zdGF0ZXMubWVudXN0YXRlIFxyXG4gIC8vdXRvcHkuY3VycmVudFN0YXRlID0gdXRvcHkuc3RhdGVzLmNvcnJpZG9yc2VsZWN0aW9uc3RhdGUgXHJcbiAgLy91dG9weS5jdXJyZW50U3RhdGUgPSB1dG9weS5zdGF0ZXMuc2luZ2xlY2hhcnNlbGVjdHN0YXRlIFxyXG4gIC8vdXRvcHkuY3VycmVudFN0YXRlID0gdXRvcHkuc3RhdGVzLmNoYXJzZWxlY3RzdGF0ZSBcclxuICB1dG9weS5jdXJyZW50U3RhdGUgPSB1dG9weS5zdGF0ZXMubWVudXN0YXRlXHJcbiAgXHJcbiAgdXRvcHkuc3dpdGNoU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSwgaW5pdCkge1xyXG4gICAgaWYgKHV0b3B5LmN1cnJlbnRTdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHV0b3B5LmN1cnJlbnRTdGF0ZS5maW5pc2goKSBcclxuICAgICAgXHJcbiAgICAgIGlmICh0eXBlb2Yoc3RhdGUpID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHV0b3B5LmN1cnJlbnRTdGF0ZSA9IHV0b3B5LnN0YXRlc1tzdGF0ZV0gXHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mKHN0YXRlKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB1dG9weS5jdXJyZW50U3RhdGUgPSBzdGF0ZSBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdDb3VsZCBub3QgbG9hZCBzdGF0ZTogJyArIHN0YXRlKSBcclxuICAgICAgICByZXR1cm4gXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHV0b3B5LmN1cnJlbnRTdGF0ZS5pbml0KGluaXQgfHwge30pIFxyXG4gICAgfVxyXG4gIH0gXHJcbiAgXHJcbiAgdXRvcHkuaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gR2FtZSBJbml0aWFsaXphdGlvblxyXG4gICAgdXRvcHkuY3VycmVudFN0YXRlLmluaXQoKSBcclxuICAgIFxyXG4gICAgdXRvcHkuY2FtZXJhLnRyYW5zZm9ybS51cGRhdGUoKSBcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXRvcHkudGljaykgXHJcbiAgfSBcclxuICBcclxuICBcclxuICAvLyBPdXIgZ2FtZSBzaW11bGF0aW9uIHByb3BlcnRpZXMuXHJcbiAgLy8gQWN0dWFsbHksICdmcmFtZXMgcGVyIHNlY29uZCcgaXMgd3JvbmcsIHRoZSBjb3JyZWN0IFxyXG4gIC8vICdzaW11bGF0aW9uIHN0ZXBzJy5cclxuICB1dG9weS5zaGFyZWQuc2ltdWxhdGlvbiA9IHtcclxuICAgIHRpbWVzdGFtcDogMCxcclxuICAgIGZwczogNjAsXHJcbiAgICB0aW1lU2NhbGU6IDEuMCxcclxuICAgIGZyYW1lU3RlcDogMFxyXG4gIH1cclxuICBcclxuICBsZXQgcHJldmlvdXMgPSBwZXJmb3JtYW5jZS5ub3coKSxcclxuICAgIG1zRWxhcHNlZCA9IDAsXHJcbiAgICBsYWcgPSAwLFxyXG4gICAgZnJhbWVzID0gMCxcclxuICAgIGZwc1RpbWUgPSAwIFxyXG4gICAgICBcclxuICB1dG9weS5zaGFyZWQuc2ltdWxhdGlvbi5mcmFtZVN0ZXAgPSAxLjAgLyB1dG9weS5zaGFyZWQuc2ltdWxhdGlvbi5mcHMgXHJcbiAgXHJcbiAgdXRvcHkudGljayA9IGZ1bmN0aW9uKHRpbWVzdGFtcCkge1xyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1dG9weS50aWNrKSBcclxuICAgIFxyXG4gICAgdXRvcHkuc2hhcmVkLnNpbXVsYXRpb24udGltZXN0YW1wID0gdGltZXN0YW1wIFxyXG5cclxuICAgIGxldCBub3cgPSB0aW1lc3RhbXAgXHJcbiAgICBsZXQgZWxhcHNlZCA9IChub3cgLSBwcmV2aW91cykgKiAxZS0zXHJcbiAgICBwcmV2aW91cyA9IG5vdyBcclxuICAgIFxyXG4gICAgaWYgKGVsYXBzZWQgPj0gdXRvcHkuc2hhcmVkLnNpbXVsYXRpb24uZnJhbWVTdGVwKVxyXG4gICAgICBlbGFwc2VkID0gdXRvcHkuc2hhcmVkLnNpbXVsYXRpb24uZnJhbWVTdGVwIFxyXG4gICAgXHJcbiAgICBsYWcgKz0gZWxhcHNlZCBcclxuICAgIFxyXG4gICAgd2hpbGUgKGxhZyA+PSB1dG9weS5zaGFyZWQuc2ltdWxhdGlvbi5mcmFtZVN0ZXApIHtcclxuICAgICAgdXRvcHkuY3VycmVudFN0YXRlLnVwZGF0ZSh1dG9weS5zaGFyZWQuc2ltdWxhdGlvbi5mcmFtZVN0ZXAgKiB1dG9weS5zaGFyZWQuc2ltdWxhdGlvbi50aW1lU2NhbGUpIFxyXG4gICAgICB1dG9weS5jYW1lcmEudXBkYXRlKHV0b3B5LnNoYXJlZC5zaW11bGF0aW9uLmZyYW1lU3RlcCAqIHV0b3B5LnNoYXJlZC5zaW11bGF0aW9uLnRpbWVTY2FsZSkgXHJcbiAgICAgIHV0b3B5LnRpbWVyLnVwZGF0ZSh1dG9weS5zaGFyZWQuc2ltdWxhdGlvbi5mcmFtZVN0ZXAgKiB1dG9weS5zaGFyZWQuc2ltdWxhdGlvbi50aW1lU2NhbGUpXHJcbiAgICAgIGxhZyAtPSB1dG9weS5zaGFyZWQuc2ltdWxhdGlvbi5mcmFtZVN0ZXAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHV0b3B5LmlucHV0LmZpbmlzaCgpIFxyXG4gIH0gXHJcbiAgXHJcbiAgdXRvcHkuaW5pdCgpIFxyXG59KCkpIFxyXG5cclxuXHJcblxyXG5cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLypcclxuICogTk9URTogVHdvIG1vZHVsZXMgb3BlcmF0ZSBvbiB0aGUgJ3dvcmxkJyBlbGVtZW50LlxyXG4gKiBUaGUgY2FtZXJhIHdpbGwgaGFuZGxlIG1vdmVtZW50IGFuZCB0aGlzIG9uZSB3aWxsIGhhbmRsZVxyXG4gKiBjaGlsZHJlbiBhc3NlbWJsaWVzLlxyXG4gKi9cclxuIFxyXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbihvYmplY3RzKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IHdvcmxkID0ge307XHJcbiAgICAvKlxyXG4gICAgd29ybGQuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3dvcmxkJyk7XHJcbiAgICB3b3JsZC5lbGVtZW50LnN0eWxlLmlkID0gJ3dvcmxkJztcclxuICAgIHV0b3B5Lm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQod29ybGQuZWxlbWVudCk7Ki9cclxuICAgIFxyXG4gICAgd29ybGQuZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3JsZCcpO1xyXG4gICAgXHJcbiAgICB3b3JsZC5vYmplY3RzID0gW107XHJcbiAgICBcclxuICAgIHdvcmxkLmFkZCA9IGZ1bmN0aW9uKG9iamVjdCkge1xyXG4gICAgICAgIHdvcmxkLm9iamVjdHMucHVzaChvYmplY3QpO1xyXG4gICAgICAgIHdvcmxkLmVsZW1lbnQuYXBwZW5kQ2hpbGQob2JqZWN0LnJvb3QpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgd29ybGQuZ2V0QnlJZCA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgbGV0IGkgPSB3b3JsZC5vYmplY3RzLmxlbmd0aDtcclxuICAgICAgICB3aGlsZShpLS0pIHtcclxuICAgICAgICAgICAgaWYgKHdvcmxkLm9iamVjdHNbaV0uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd29ybGQub2JqZWN0c1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHdvcmxkLnJlbW92ZSA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgbGV0IG9iamVjdCA9IHdvcmxkLmdldEJ5SWQoaWQpO1xyXG4gICAgICAgIGlmICh0eXBlb2Yob2JqZWN0KSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBvYmplY3QuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB3b3JsZC5vYmplY3RzLnNwbGljZSh3b3JsZC5vYmplY3RzLmluZGV4T2Yob2JqZWN0KSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgd29ybGQuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCBpID0gd29ybGQub2JqZWN0cy5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUoaS0tKSB7XHJcbiAgICAgICAgICAgIGxldCBvYmplY3QgPSB3b3JsZC5vYmplY3RzW2ldO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIG9iamVjdHMuR2FtZU9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB3b3JsZC5vYmplY3RzID0gW107XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gd29ybGQ7XHJcbiAgICBcclxufSh3aW5kb3cudXRvcHkub2JqZWN0cykpO1xyXG4iXX0=
