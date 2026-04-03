const drill = Blocks.mechanicalDrill
const conv = Blocks.conveyor
const brid = Blocks.itemBridge
const junction = Blocks.junction
const router = Blocks.router
const sorter = Blocks.sorter
const inverted = Blocks.invertedSorter
const core1 = Blocks.coreShard
const core2 = Blocks.coreFoundation
const core3 = Blocks.coreNucleus

core1.itemCapacity = 500000
core2.itemCapacity = 2000000
core3.itemCapacity = 10000000

core1.health = 100000
core2.health = 200000
core3.health = 500000
core1.unitCapModifier = 100
core2.unitCapModifier = 200
core3.unitCapModifier = 500

junction.speed = 0.1
router.speed = 0.1
sorter.speed = 0.1
inverted.speed = 0.1

junction.health = 1000000
router.health = 1000000
sorter.health = 1000000
inverted.health = 1000000

conv.speed = 0.2
drill.drillTime=0.6
drill.tier=10
drill.itemCapacity=1000000
drill.health=1000000
drill.size=1
drill.rotateSpeed=100

conv.speed=0.1
conv.health=1000000
conv.itemCapacity=100
conv.floating=true

brid.range=100
brid.health=1000000
brid.itemCapacity=100
brid.floating=true