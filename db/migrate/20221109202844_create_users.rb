class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :subjects
      t.string :headline
      t.integer :hourly_rate
      t.string :name
      t.string :grade

      t.timestamps
    end
  end
end
