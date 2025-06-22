// Modular architecture for easy feature additions

export interface Module {
  name: string
  version: string
  enabled: boolean
  config: Record<string, any>
  dependencies: string[]
}

export interface ModuleConfig {
  leadGeneration: {
    placementTest: boolean
    downloadGates: boolean
    popups: boolean
    exitIntent: boolean
  }
  
  contentMarketing: {
    blog: boolean
    seo: boolean
    socialSharing: boolean
    emailCapture: boolean
  }
  
  salesTools: {
    pricing: boolean
    testimonials: boolean
    caseStudies: boolean
    socialProof: boolean
  }
  
  automation: {
    chatbot: boolean
    emailSequences: boolean
    leadScoring: boolean
    analytics: boolean
  }
  
  integrations: {
    externalLMS: boolean
    crm: boolean
    emailMarketing: boolean
    calendar: boolean
  }
}

// Default module configuration
export const defaultModuleConfig: ModuleConfig = {
  leadGeneration: {
    placementTest: true,
    downloadGates: true,
    popups: false,
    exitIntent: false
  },
  
  contentMarketing: {
    blog: true,
    seo: true,
    socialSharing: true,
    emailCapture: true
  },
  
  salesTools: {
    pricing: true,
    testimonials: true,
    caseStudies: true,
    socialProof: true
  },
  
  automation: {
    chatbot: false,
    emailSequences: false,
    leadScoring: false,
    analytics: true
  },
  
  integrations: {
    externalLMS: true,
    crm: false,
    emailMarketing: false,
    calendar: false
  }
}

// Module registry for easy feature management
export class ModuleRegistry {
  private modules: Map<string, Module> = new Map()
  
  register(module: Module) {
    this.modules.set(module.name, module)
  }
  
  isEnabled(moduleName: string): boolean {
    const module = this.modules.get(moduleName)
    return module?.enabled ?? false
  }
  
  getConfig(moduleName: string): Record<string, any> {
    const module = this.modules.get(moduleName)
    return module?.config ?? {}
  }
  
  enable(moduleName: string) {
    const module = this.modules.get(moduleName)
    if (module) {
      module.enabled = true
    }
  }
  
  disable(moduleName: string) {
    const module = this.modules.get(moduleName)
    if (module) {
      module.enabled = false
    }
  }
}

export const moduleRegistry = new ModuleRegistry()