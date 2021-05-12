import { Mutations } from './mutations'

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
