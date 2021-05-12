import Moveable from 'moveable'
import { Mutations } from './mutations'
import Node from '@/editorImpl/node'
import Stage from '@/editorImpl/stage'
import Scene from '@/editorImpl/scene'

export default {
    state: {
        stage: null,
        selectedNodeId: '',
        currentSceneIdx: 0,
        sceneList: [],
        assets: {},
        nodes: {}
    },
    mutations: {
        [Mutations.setSelectedNodeId](state: any, nodeId: string) {
            state.selectedNodeId = nodeId
        },
        [Mutations.initStage](state: any, el: HTMLElement) {
            state.stage = new Stage(el)
            console.log(state.stage)
        },
        [Mutations.addNode](state: any, type: string) {
            if (type === 'rect') {
                state.stage = state.stage as Moveable
                const rect = new Node(state.stage)
                console.log(rect)
                state.stage.add(rect)
            }
        },
        [Mutations.addScene](state: any) {
            // const scene = new Scene()
            // state.sceneList.push(scene)
        }
    },
    actions: {

    },
    getters: {
        sceneList: (state: any) => state.sceneList,
        currScene: (state: any) => state.sceneList[state.currentSceneIdx],
        selectedNode: (state: any) => (state.nodes as any)[state.selectedNodeId],
        totalSceneCount: (state: any) => state.sceneList.length
    },
}
