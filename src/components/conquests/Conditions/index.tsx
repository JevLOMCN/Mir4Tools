'use client'

import { ConquestsAtom } from '@/atoms/Conquests'
import ConquestTowersData from '@/data/ConquestTowerData'
import { toCamelCase } from '@/utils/index'
import { useAtomValue } from 'jotai'
import { useTranslation } from '../../../../public/locales/client'
import AditionalBuildingsConditions from './AdditionalBuildings'
import ConditionCard from './ConditionCard'

export default function ConquestConditions() {
  const { tower, stage } = useAtomValue(ConquestsAtom)
  const { t } = useTranslation()

  const currentTower = ConquestTowersData[tower].Steps[stage]

  return currentTower.Condition ? (
    <section className="flex flex-col gap-4">
      <div className="custom-scroll relative mx-auto mt-6 flex flex-row flex-wrap items-start justify-start gap-4 overflow-auto px-2 py-3 sm:flex-nowrap lg:max-w-7xl lg:px-8 lg:py-6">
        {Object.entries(currentTower.Condition?.Building).map(
            ([buildingName, level]) => (
              <ConditionCard
                key={buildingName}
                image={`/conquests/previews/${toCamelCase(buildingName)}.png`}
                name={t(buildingName)}
                level={level}
              />
            )
          )}

        {Object.values(currentTower.Condition?.Achievement).map(
            (achievment, index) => {
              const isMultiple = hasMultiple(achievment)
              let amount = 0
              if (isMultiple) {
                const match = achievment.match(/\d+/gm)?.[0]
                amount = Number.isInteger(Number(match)) ? Number(match) : 0
              }

              return (
                <ConditionCard
                  key={index}
                  image={'/conquests/previews/condition.png'}
                  name={
                    hasMultiple(achievment)
                      ? t(achievment.replace(/\d+/gm, '{{amount}}'), { amount })
                      : t(achievment)
                  }
                />
              )
            }
          )}
      </div>

      <AditionalBuildingsConditions />
    </section>
  ) : (
    <></>
  )
}

function hasMultiple(achievement: string) {
  return [
    'times',
    'Promote Constitution to Tier ',
    'Reach Lv. ',
    ' Spirit Stones',
    ' Codices',
    'Promote ',
    'Solitude Training Limbo Realm',
    'Solitude Training Profound Realm Lv',
  ].some((d) => achievement.includes(d))
}
